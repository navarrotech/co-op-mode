// Copyright © 2024 Navarrotech

import type { Prisma } from "@prisma/client"
import type { PrismaTableNames } from "./database"
import amqplib, { type Channel, type Connection } from "amqplib"
import { ProtoBufs } from "./protobuf"
import { RABBITMQ_URL } from "@/env"

// Use RabbitMQ to send messages between services

const queue = 'changes'

let connection: Connection
let channel: Channel

const options = {
    persistent: true
}

export async function initMessageBus() {
    connection = await amqplib.connect(RABBITMQ_URL)
    channel = await connection.createChannel()
    await channel.assertQueue(queue, { durable: true })
    console.log('[PASS] Rabbit MQ connection ready')
}

export async function closeMessageBus() {
    await channel?.close()
    await connection?.close()
}

type ChangeType = "CREATE" | "UPDATE" | "DELETE"

const structsToTableTypes = {
    User: "user",
    Preferences: "preferences",
    DatingProfile: "dating_profile",
    Limits: "limits",
    Media: "media",
    Likes: "likes",
    Dislikes: "dislikes",
    Status: "status",
    Conversations: "conversations",
    Messages: "messages",
} as const

export const tableNamesToStructNames = {
    users: "User",
    preferences: "Preferences",
    dating_profile: "DatingProfile",
    limits: "Limits",
    media: "Media",
    likes: "Likes",
    dislikes: "Dislikes",
    status: "Status",
    conversations: "Conversations",
    messages: "Messages",
}

type Handler = {
    [K in Prisma.PrismaAction]: (model: PrismaTableNames, data: any) => Promise<void>
}

export const PrismaMiddlewareHandlers: Partial<Handler> = {
    "delete": async (model, data) => {
        publishToBus(
            "DELETE",
            tableNamesToStructNames[model],
            data,
        )
    },
    "deleteMany": async (model, data) => {
        data.forEach((item: any) => {
            publishToBus(
                "DELETE",
                tableNamesToStructNames[model],
                item,
            )
        })
    },
    "create": async (model, data) => {
        publishToBus(
            "CREATE",
            tableNamesToStructNames[model],
            data,
        )
    },
    "createMany": async (model, data) => {
        data.forEach((item: any) => {
            publishToBus(
                "CREATE",
                tableNamesToStructNames[model],
                item,
            )
        })
    },
    "update": async (model, data) => {
        publishToBus(
            "UPDATE",
            tableNamesToStructNames[model],
            data,
        )
    },
    "updateMany": async (model, data) => {
        // TODO, this might not work :/
        // becuase I think data returned is { count: 1 }
        // data.forEach((item: any) => {
        //     publishToBus(
        //         "UPDATE",
        //         tableNamesToStructNames[model],
        //         item,
        //     )
        // })
        console.log("updateMany $use middleware", model, data)
    },
    "upsert": async (model, data) => {
        // TODO, this requires testing!
        console.log("upsert $use middleware", model, data)
    },
}

export async function publishToBus<T extends keyof typeof structsToTableTypes>(type: ChangeType, struct: T, data: typeof ProtoBufs[T]) {
    const key = structsToTableTypes[struct]
    const event = ProtoBufs.ChangeEvent.fromObject({
        type,
        struct,
        [key]: data
    })

    console.log("Publishing event to bus", event)
    channel.sendToQueue(
        queue,
        Buffer.from(
            ProtoBufs.ChangeEvent.encode(event).finish()
        ),
        options
    )
}

export const getBus = () => channel
