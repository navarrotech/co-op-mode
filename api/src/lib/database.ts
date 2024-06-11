// Copyright © 2023 Navarrotech

// Core
import { PrismaClient, type Prisma } from "@prisma/client"

const prisma = new PrismaClient()

export type PrismaTableNames = Prisma.ModelName

export async function initDatabase() {
    await prisma.$connect()
    console.log("[PASS] Database ready")
}

export default prisma
