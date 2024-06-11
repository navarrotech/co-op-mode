// Copyright © 2023 Navarrotech

import express from 'navarrotech-express'

// Routing
import path from 'path'
import { routes } from './src/functions'

// Application
import { version } from './src/version'
import { initDatabase } from './src/lib/database';

// Middleware

// Environment Variables
import { API_PORT, NODE_ENV } from "src/env"

const rootDirectory = process.cwd();

// @ts-ignore
const app = express({
  // Application:
  cors: NODE_ENV === "development",
  customMiddleware: [
  ],

  // Routes
  publicFolderPath: path.join(rootDirectory, 'public'),
  routes: routes as any[],

  // Memory store:
  // store: store as any,
})

// Node.js error reporting
app.on('error', (error: any) => {
  console.error('Crashed', error)
})
process.on('uncaughtException', async function (err: any) {
  console.log('Crashed', err)
  process.exit(1)
});

Promise.all([
  initDatabase(),
]).then(() => {
  app.listen(API_PORT, () => console.log(`
API Startup Complete
Port: ${API_PORT}
Version: ${version}
Environment: ${NODE_ENV}
Created by Navarrotech 2023
  `.trim()))
})
