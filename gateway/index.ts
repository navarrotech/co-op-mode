//Copyright © 2024 Navarrotech.

import { initMessageBus, closeMessageBus } from './src/lib/bus'
import { initDatabase, closeDatabase } from './src/lib/database'
import { initRedis, closeRedis } from './src/lib/redis'
import { initGateway, closeGateway } from './src/main'

async function gracefulShutdown(){
  console.log('Shutting down')
  await Promise.all([
    closeMessageBus(),
    closeDatabase(),
    closeRedis(),
    closeGateway()
  ])
  process.exit(0)
}

process.on('SIGINT', gracefulShutdown)
process.on('SIGTERM', gracefulShutdown)
process.on('uncaughtException', async function (err: any) {
  console.log('Crashed', err)
  await gracefulShutdown()
  process.exit(0)
})
  

Promise.all([
  initMessageBus(),
  initDatabase(),
  initRedis()
]).then(() => initGateway())

