// Copyright © 2024 Navarrotech

import ProtoBufs, { type ProtoBufMessages } from '@/modules/protobuf'
import { defaultLanguage } from './language'
import { API_URL, NODE_ENV } from '@/env'

// This should be synced with the user's preferences eventually!
const defaults: Record<string, string> = {
    language: localStorage.getItem('language') || defaultLanguage
}

Object.keys(defaults).forEach(key => {
    const savedValue = localStorage.getItem('defaults:' + key)
    if (savedValue){
        defaults[key] = savedValue
    }
})

export function setApiDefault(key: string, value: string) {
    defaults[key] = value
    localStorage.setItem('defaults:' + key, value)
}

export type ProtoResponse<T = any> = {
    data: T
    status: number
    headers: any
    struct: keyof typeof ProtoBufs
}

// Type utility to get the properties of a type that are not functions
type NonFunctionProperties<T> = {
    [K in keyof T]: T[K] extends Function ? never : K;
}[keyof T];

type NonFunction<T> = Pick<T, NonFunctionProperties<T>>;

export async function sendProto<K = any, T extends ProtoBufMessages = any>(url: string, struct: T, data: Partial<NonFunction<ReturnType<typeof ProtoBufs[T]['create']>>>, method = "POST"): Promise<ProtoResponse<K>> {
    const Construct = ProtoBufs[struct]
    const buffer = Construct.fromObject(data)

    if (!Construct) {
        console.error("Invalid struct: ", struct, !!Construct, ProtoBufs)
    }

    const response = await fetch(
        API_URL + url,
        {
            method,
            headers: {
                'Content-Type': 'Application/X-Protobuf',
                'X-Protobuf-Struct': struct,
                'Accept-Language': defaults.language,
            },
            // @ts-ignore
            body: method === "GET" ? undefined : Construct.encode(buffer).finish(),
            credentials: 'include',
        }
    )

    const rawResponse = await response.arrayBuffer()
    const headers = response.headers
    if (headers.get('content-type') !== 'application/x-protobuf') {
        console.log("Invalid content type, returning undefined: ", headers.get('content-type'))
        return {
            status: response.status,
            headers: response.headers,
            // @ts-ignore
            data: undefined,
            struct: "Blank",
        }
    }

    // Next we'll try to decode the response
    // From a protobuf back to a JSON object

    const returnStruct = headers.get('x-protobuf-struct')

    // @ts-ignore
    const returnConstruct = ProtoBufs[returnStruct]

    if (!returnConstruct) {
        console.error("Invalid return struct: ", returnStruct, !!returnConstruct, ProtoBufs)
        return {
            status: response.status,
            headers: response.headers,
            // @ts-ignore
            data: undefined,
            struct: "Blank",
        }
    }
    
    try {
        const body = returnConstruct.decode(
            new Uint8Array(rawResponse)
        )

        const data = body.toJSON()
        if (NODE_ENV === 'development') {
            console.log(response.status + ", Decoded data: " + returnStruct, data)
        }

        return {
            data,
            status: response.status,
            headers: response.headers,
            struct: returnStruct,
        } as ProtoResponse<K>
    } catch (error: any){
        console.log(error)
        return {
            status: response.status,
            headers: response.headers,
            // @ts-ignore
            data: undefined,
            struct: "Blank",
        }
    }
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
