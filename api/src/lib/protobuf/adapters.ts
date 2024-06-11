// Copyright © 2024 Navarrotech

import type { PrismaTableNames } from "../database"
import type prisma from "lib/database"
import type { Message } from "google-protobuf";

import { tables } from "lib/database"
import { snakeCase } from "lodash"

import * as ProtoBuf from "./schema_pb"

export type ProtoType = keyof typeof ProtoBuf
export type CompatibleProtoKeys = PrismaTableNames & ProtoType

type TablesToAdapters = {
    [K in CompatibleProtoKeys]: (data: typeof prisma[K]) => Message //typeof ProtoBuf[K]
}

// @ts-ignore
export const adapters: TablesToAdapters = {}

export async function buildAdapters() {
    for (const index in tables) {
        const tableName: string = tables[index]

        if (!ProtoBuf[tableName]) {
            continue
        }

        const adapterDataKeys = Object
            .keys(ProtoBuf[tableName].prototype)
            .filter(key => key.startsWith("set"))

        const dataAttributes = [ ...adapterDataKeys ]
            .map(key => snakeCase(key.slice(3)))

        adapters[tableName as CompatibleProtoKeys] = function generatedAdapter(data: any){
            const proto: Message = new ProtoBuf[tableName]()

            for (let index = 0; index < dataAttributes.length; index++) {
                const attribute = dataAttributes[index]
                const setter = adapterDataKeys[index]

                if (attribute in data) {
                    const value = sanitizeData(
                        data[attribute]
                    )
                    proto[setter](value)
                } else {
                    console.warn(`Attribute ${tableName}.${attribute} was in prisma table data but not in proto schema`)
                }
            }

            return proto
        }
    }
}

export function sanitizeData(data: any) {
    switch (typeof data) {
        case "string":
        case "number":
        case "boolean":
        case "bigint":
            return data
        case "object":
            if (data instanceof Date) {
                return data.toISOString()
            }
            return JSON.stringify(data)
        case "undefined":
            console.log(`Undefined data type to sanitize`, { data })
            return "undefined"
        default:
            console.log(`Unknown data type to sanitize`, { data, type: typeof data })
            return ""
    }
}
