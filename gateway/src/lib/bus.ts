// Copyright © 2024 Navarrotech

// Typescript
import type { ChangeType } from "../types"

// Rabbit MQ
import amqplib, { type Channel, type Connection } from "amqplib"
import { RABBITMQ_URL } from "../env"

// Protobuf
import ProtoBufs from "./generated/ProtoTypes"
import { structsToTableTypes } from "../constants"

// Sub functions
import Handlers from "../main"

// Use RabbitMQ to send messages between services

export const queue = 'changes'

let connection: Connection
let channel: Channel

const options = {

}

export async function initMessageBus() {
    connection = await amqplib.connect(RABBITMQ_URL)
    channel = await connection.createChannel()

    channel.assertQueue(queue)
    channel.consume(queue, async (message) => {
        try {
            if (!message) {
                return
            }

            const event = ProtoBufs.ChangeEvent.decode(
                new Uint8Array(message.content)
            ).toJSON()

            const struct = event.struct as keyof typeof structsToTableTypes
            const type = event.type as ChangeType

            const data = event[
                structsToTableTypes[struct]
            ]

            channel.ack(message)

            await Handlers[struct]?.(type, data, message.content)
        } catch (error: any) {
            console.error(error)
        }
    })

    console.log('[PASS] Rabbit MQ connection ready')
}

export async function closeMessageBus() {
    await channel?.close()
    await connection?.close()
}

export const getBus = () => channel
