// Copyright © 2023 Navarrotech

import express from 'navarrotech-express'

// Routing
import path from 'path'
import { routes } from './src/functions'

// Application
import { version } from './src/version'
import { initDatabase, closeDatabase } from './src/lib/database'
import { initRedis, closeRedis, redisStore } from '@/lib/redis'
import { buildAdapters } from '@/lib/protobuf/adapters'

// Middleware
import protobufMiddleware from '@/middleware/parseProtobuf'

// Environment Variables
import { API_PORT, NODE_ENV } from "src/env"

const rootDirectory = process.cwd();

console.log("Starting up")

// @ts-ignore
const app = express({
  // Application:
  cors: NODE_ENV === "development",
  customMiddleware: [
    protobufMiddleware,
  ],

  // Routes
  publicFolderPath: path.join(rootDirectory, 'public'),
  routes: routes as any[],

  store: redisStore as any,
})

async function gracefulShutdown(){
  console.log('Shutting down')
  await Promise.all([
    closeDatabase(),
    closeRedis(),
  ])
  process.exit(0)
}

process.on('uncaughtException', async function (err: any) {
  console.log('Crashed', err)
  await gracefulShutdown()
  process.exit(0)
})

Promise.all([
  initDatabase(),
  initRedis(),
  buildAdapters(),
]).then(() => {
  app.listen(API_PORT, () => console.log(`
API Startup Complete
Port: ${API_PORT}
Version: ${version}
Environment: ${NODE_ENV}
Created by Navarrotech 2023
  `.trim()))
})
