// Copyright © 2024 Navarrotech

import ProtoBufs, { type ProtoBufMessages } from '@/modules/protobuf'

export type ProtoResponse<T = any> = {
    data: T
    status: number
    headers: any
}

export async function sendProto<K = any, T extends ProtoBufMessages = any>(url: string, struct: T, data: typeof ProtoBufs[T]): Promise<ProtoResponse<K> | undefined> {
    const Construct = ProtoBufs[struct]
    const buffer = Construct.fromObject(data)

    const response = await fetch(
        "http://localhost:3000" + url,
        {
            method: 'POST',
            headers: {
                'X-Protobuf-Struct': struct,
                'Content-Type': 'Application/X-Protobuf',
            },
            body: Construct.encode(buffer).finish(),
        }
    )

    const rawResponse = await response.text()
    const headers = response.headers
    if (headers.get('content-type') !== 'application/x-protobuf') {
        return
    }

    const returnStruct = headers.get('x-protobuf-struct')

    // @ts-ignore
    const returnConstruct = ProtoBufs[returnStruct]

    if (!returnConstruct){
        return
    }
    
    try {
        const body = returnConstruct.decode(
            new TextEncoder().encode(rawResponse)
        )

        return {
            data: body.toJSON(),
            status: response.status,
            headers: response.headers
        } as ProtoResponse<K>
    } catch (error: any){
        console.log(error)
        return
    }

    return
}

// Why was axios a PART of the problem?
// return Api.post(
//     url,
//     buffer,
//     {
//         headers: {
//             'X-Protobuf-Struct': struct,
//         },
//     }
// )

// export const Api = axios.create({
//     baseURL: 'http://localhost:3000',
//     headers: {
//         // This is initialized in Initialization.tsx
//         'Authorization': 'Bearer ',
//         'Content-Type': 'Application/X-Protobuf',
//     },
//     transformResponse: [
//         function parseProtobuf(data, headers) {
//             if (headers['content-type'] == 'application/x-protobuf') {
//                 const struct = headers['x-protobuf-struct']

//                 // @ts-ignore
//                 const construct = ProtoBufs[struct]

//                 if (construct){
//                     try {
//                         const body = construct.decode(
//                             new TextEncoder().encode(data)
//                         )
    
//                         return body.toJSON()
//                     } catch (error: any){
//                         console.log(error)
//                         return data
//                     }
//                 }
//             }

//             return data
//         }
//     ],
//     withCredentials: true
// })

// Api.interceptors.response.use(response => {
//     return response;
//   }, error => {
//     console.error("Error from server: " + error?.response?.data?.message)
//     return error;
// });
