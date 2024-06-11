// Copyright © 2024 Navarrotech

import type Prisma from "lib/database"
import type { Request, Response, NextFunction } from "@/types"
import type { ProtoType } from "@/lib/protobuf"
import type { Message } from "google-protobuf"

import * as ProtoBuf from "lib/protobuf/schema_pb"
import { adapters, type CompatibleProtoKeys } from "@/lib/protobuf"

export default function protobufMiddleware(request: Request, response: Response, next: NextFunction) {
    // For handling outgoing protobuf payloads
    response.sendTableProto = function sendProto<T extends CompatibleProtoKeys>(struct: T, data: typeof Prisma[T], message: string) {
        const construct = adapters[struct](data)

        response.setHeader("Content-Type", "application/x-protobuf")
        response.setHeader("Content-Struct", struct)
        response.setHeader("Message", message)

        response.send(
            construct.serializeBinary()
        )
    }

    response.sendProto = function sendProto(struct: string, data: Message, message: string) {
        response.setHeader("Content-Type", "application/x-protobuf")
        response.setHeader("Content-Struct", struct)
        response.setHeader("Message", message)

        response.send(
            data.serializeBinary()
        )
    }

    // For handling incoming protobuf payloads
    if (request.headers["content-type"] === "application/x-protobuf") {
        const struct = request.headers["content-struct"] as (ProtoType | undefined)
        if (struct && ProtoBuf[struct]) {
            try {
                const buffer = []
                request.on('data', (chunk) => buffer.push(chunk))
                request.on('end', () => {
                  const data = Buffer.concat(buffer)
                  request.body = ProtoBuf[struct].deserializeBinary(data).toObject()
                  next()
                })
            } catch (error: any) {
                console.error("[Protobuf Error] :: " + error.message)
                response.status(400).send('Invalid protobuf payload')
            }
        } else {
            response.status(400).send('Missing or invalid content-struct header')
        }
    } else {
        next()
    }
}
