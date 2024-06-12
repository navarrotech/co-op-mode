// Copyright © 2024 Navarrotech

import axios from 'axios'
import ProtoBufs, { type ProtoBufMessages } from '@/modules/protobuf'

export const Api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        // This is initialized in Initialization.tsx
        'Authorization': 'Bearer ',
        'Content-Type': 'Application/X-Protobuf',
    },
    transformResponse: [
        function parseProtobuf(data, headers) {
            if (headers['content-type'] == 'application/x-protobuf') {
                const struct = headers['x-protobuf-struct']

                // @ts-ignore
                const construct = ProtoBufs[struct]

                if (construct){
                    try {
                        const body = construct.decode(
                            new TextEncoder().encode(data)
                        )
    
                        return body.toJSON()
                    } catch (error: any){
                        console.log(error)
                        return data
                    }
                }
            }

            return data
        }
    ],
    responseType: 'arraybuffer',
    withCredentials: true
})

Api.interceptors.response.use(response => {
    return response;
  }, error => {
    console.error("Server error: " + error?.response?.data?.message)
    return error;
});

export function sendProto<T extends ProtoBufMessages>(url: string, struct: T, data: typeof ProtoBufs[T]) {
    const Construct = ProtoBufs[struct]
    const buffer = Construct.encode(
        Construct.fromObject(data)
    ).finish()

    return Api.post(
        url,
        buffer,
        {
            headers: {
                'X-Protobuf-Struct': struct,
                // 'Content-Length': buffer.length.toString()  // Ensure Content-Length is set correctly
            }
        }
    )
}
