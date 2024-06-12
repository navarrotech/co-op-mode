// Copyright © 2023 Navarrotech

// Core
import { PrismaClient, type Prisma } from "@prisma/client"

const prisma = new PrismaClient()

export type PrismaTableNames = Prisma.ModelName
export const tables = Object.keys(prisma).filter((key) => !key.startsWith("$") && !key.startsWith("_"))

export async function initDatabase() {
    await prisma.$connect()
    console.log("[PASS] Database ready")
}

export async function closeDatabase() {
    await prisma.$disconnect()
}

export default prisma
