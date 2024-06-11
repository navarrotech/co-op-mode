// Copyright © 2024 Navarrotech

import type { AxiosResponse } from 'axios'

import ProtoBuf from '@/modules/protobuf'
import axios from 'axios'

export type ApiAxiosResponse<T = any> = AxiosResponse<T> & {
    message: string
}

export const API = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        // This is initialized in Initialization.tsx
        'Authorization': 'Bearer '
    },
    withCredentials: true
})

API.interceptors.response.use(
    response => {
        console.log(response)
        
        if (response.headers['content-type'].includes('application/x-protobuf;')) {
            const struct = response.headers['content-struct']
            const message = response.headers['message']
            // @ts-ignore
            const construct = ProtoBuf[struct]

            if (construct){
                const body = construct.deserializeBinary(response.data).toObject()
                response.data = body
            }
        }

        return response;
    },
    error => {
      // Handle any error status codes here
      // Optionally reshape the error response
      if (error.response) {
        // const reshapedError = reshapeResponse(error.response);
        return Promise.resolve(error);
      }
      // If there's no response (network error, etc.), return the original error or any default value
      return Promise.resolve({ data: {}, status: 500, statusText: 'Network Error' });
    }
);
