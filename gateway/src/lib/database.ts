//Copyright © 2024 Navarrotech.

// Core
import { PrismaClient, type Prisma } from '@prisma/client'

const database = new PrismaClient()

export type PrismaTableNames = Prisma.ModelName
export const tables = Object.keys(database).filter((key) => !key.startsWith('$') && !key.startsWith('_'))

export async function initDatabase() {
  await database.$connect()
  console.log('[PASS] Database ready')
}

export async function closeDatabase() {
  await database.$disconnect()
}

export default database
