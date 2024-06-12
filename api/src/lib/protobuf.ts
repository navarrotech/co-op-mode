// Copyright © 2024 Navarrotech

import { users, likes, dislikes, preferences } from "@prisma/client"
import * as ProtoBufLibrary from "./generated/schema"

export const ProtoBufs = {
    ServerError: ProtoBufLibrary.ServerError,
    ClientError: ProtoBufLibrary.ClientError,
    User: ProtoBufLibrary.User,
    Preferences: ProtoBufLibrary.Preferences,
    DatingProfile: ProtoBufLibrary.DatingProfile,
    Likes: ProtoBufLibrary.Likes,
    Dislikes: ProtoBufLibrary.Dislikes,
    Media: ProtoBufLibrary.Media,
    PermanentLimits: ProtoBufLibrary.PermanentLimits,
    DailyLimits: ProtoBufLibrary.DailyLimits,
    MonthlyLimits: ProtoBufLibrary.MonthlyLimits,
    Conversations: ProtoBufLibrary.Conversations,
    Messages: ProtoBufLibrary.Messages,
    VideoGames: ProtoBufLibrary.VideoGames,
    LoginRequest: ProtoBufLibrary.LoginRequest,
    AuthResponse: ProtoBufLibrary.AuthResponse,
}

export type matchingTables = {
    users: users,
    likes: likes,
    dislikes: dislikes,
    preferences: preferences
}

export type ProtoBufTables = keyof typeof ProtoBufs

import type { Request, Response, NextFunction } from "@/types"

export function protobufMiddleware(request: Request, response: Response, next: NextFunction) {

    // For sending protobuf payloads
    response.sendProto = function sendProto(struct, data) {
        const Construct = ProtoBufs[struct]

        if (!Construct) {
            response.status(400).send('Invalid protobuf struct')
            return
        }

        try {
            const Message = Construct.fromObject(data)
    
            response.setHeader("Content-Type", "application/x-protobuf")
            response.setHeader("Access-Control-Expose-Headers", "X-Protobuf-Struct")
            response.setHeader("X-Protobuf-Struct", struct)
    
            response.send(
                Construct.encode(Message).finish()
            )
        } catch (error: any) {
            console.error("[Protobuf SendProto Error] :: ", error.message, struct, data)
        }
    }

    // For handling incoming protobuf payloads
    if (request.headers["content-type"] === "Application/X-Protobuf") {

        const struct = request.headers["x-protobuf-struct"] as string | undefined

        const Construct = ProtoBufs[struct]
        if (struct && typeof struct === "string" && Construct) {
            try {
                const buffer: Uint8Array[] = []
                request.on('data', (chunk) => buffer.push(chunk))
                request.on('end', () => {
                    try {
                        const buffy = Buffer.concat(buffer)
                        request.body = ProtoBufs[struct].decode(buffy).toJSON()
                    } catch (error){
                        console.error("[Protobuf Parsing Error 1] :: ", error.message, struct, buffer)
                        if (!response.headersSent) {
                            response.status(400)
                            response.sendProto("ServerError", { message: "Invalid protobuf payload given!" })
                            return
                        }
                    }
                    next()
                })
            } catch (error: any) {
                console.error("[Protobuf Parsing Error 2] :: ", error)
                if (!response.headersSent) {
                    response.status(400)
                    response.sendProto("ServerError", { message: "Invalid protobuf payload given!" })
                }
            }
            return
        }
    }

    next()
}