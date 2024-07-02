// Copyright © 2023 Navarrotech

// Core
import { Prisma, PrismaClient } from "@prisma/client"
import { PrismaMiddlewareHandlers } from "./bus"

const database = new PrismaClient()

export type PrismaTableNames = Prisma.ModelName
export const tables = Object.keys(database).filter((key) => !key.startsWith("$") && !key.startsWith("_"))

export async function initDatabase() {
    await database.$connect()

    // Replication middleware
    database.$use(
        async (params, next) => {
            const { action, model } = params

            const result = await next(params)
            PrismaMiddlewareHandlers[action]?.(model, result)

            return result
        }
    )

    console.log("[PASS] Database ready")
}

export async function closeDatabase() {
    await database.$disconnect()
}

export default database
