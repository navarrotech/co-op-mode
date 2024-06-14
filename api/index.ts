// Copyright © 2023 Navarrotech

// Typescript
import type { Request, Response } from "@/types"

// Express
import express, { response } from "express"
import helmet from "helmet"

// Core middleware
import expressSession from "express-session"
import cookieParser from "cookie-parser"
import rateLimit from "express-rate-limit"
import cors from "cors"

// Custom Middleware
import i18n from "@/lib/i18n"
import validateMiddleware from "@/middleware/validate"
import { protobufMiddleware } from "@/lib/protobuf"

// Routing
import { routes } from "./src/functions"
import { v4 as uuid } from "uuid"

// Node.js
import path from "path"
import fs from "fs"

// Initialization
import { initDatabase, closeDatabase } from "./src/lib/database"
import { initRedis, closeRedis, redisStore } from "@/lib/redis"

// Environment Variables
import { API_PORT, NODE_ENV, SESSION_SECRET } from "src/env"
import { version } from "./src/version" // TODO <-- This should be a ENV variable

console.log("Starting up")
const initialization = Promise.all([
  initDatabase(),
  initRedis(),
])

const app = express()

if (NODE_ENV === "development") {
  app.use("*", cors({
    origin: true,
    credentials: true,
  }))
}

// Trust the proxy
app.set("trust proxy", 1)

// Security middlware
app.use('*',
  helmet({
    contentSecurityPolicy: false,
  }),
  // Rate limiter:
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 1 * 1000, // Limit each IP to 1000 requests per `window` (here, per 15 minutes) (66 requests per minute)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  }),
)

app.all("/ping", (req, res) => res.status(200).send("pong"))

// Custom middlewares
app.use('*',
  cookieParser(),
  // Sessions!
  expressSession({
    secret: SESSION_SECRET,
    genid: function(req) {
      return uuid() // use UUIDs for session IDs
    },
    name: "sid",
    resave: true, // Save even if nothing is changed
    saveUninitialized: false, // Save even if nothing has been set in req.session yet
    rolling: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
    store: redisStore,
  }),
  // Fixing session middleware to be async
  function sessionMiddleware(req, res, next){
    if(req.session){
      // @ts-ignore
      req.session.saveAsync = () => new Promise(acc => req.session.save(() => acc(true)))
      // @ts-ignore
      req.session.destroyAsync = () => new Promise(acc => req.session.destroy(() => acc(true)))
      // @ts-ignore
      req.session.reloadAsync = () => new Promise(acc => req.session.reload(() => acc(true)))
      // @ts-ignore
      req.session.regenerateAsync = () => new Promise(acc => req.session.regenerate(() => acc(true)))
      // @ts-ignore
      if(!!req.session?.user?.id){
        // @ts-ignore
        req.session.authorized = true
      }
    }
    next()
  },
  // Custom middlware
  i18n.init, // Internationalization
  protobufMiddleware, // Automated proto buffers
)

// Routes
routes.forEach((func) => {
  const { handler, method="post", path, validator, middlewares = [] } = func
  app[method](path, ...middlewares, async (request: Request, response: Response) => {

    const validatedBody = await validateMiddleware(request, response, validator)
    if (validatedBody === null){
      return // Error response already sent, don't continue to route
    }

    try {
      request.body = validatedBody.body
      request.query = validatedBody.query
      handler(request, response, null)
    } catch (err: any) {
      console.error(err)
      if(!response.headersSent){
        response.status(500)
        response.sendProto("ServerError", {
          message: request.__("generic_error"),
        })
      }
    }
  })
})

// 404 - Attempt to serve static public folder first for all GET requests
// Only works in development, to serve auto-generated documentation
if (NODE_ENV === "development") {
  const publicDist = path.join(__dirname, 'public')
  app.use(
    express.static(publicDist)
  )
  // Proxy the documentation
  app.get("/docs", (request, response) => response.sendFile(path.join(publicDist, 'documentation.html')))
  app.get("*",     (request, response) => response.status(404).send("Page not found"))
}

// 404 - Return a 404 for everything else
app.all("*", (request: any, response: any) =>
  response.status(404).send({
    code: 404,
    message: "Route not found",
  })
)

async function gracefulShutdown(){
  console.log('Shutting down')
  await Promise.all([
    closeDatabase(),
    closeRedis(),
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

initialization
  .then(() => {
    app.listen(API_PORT, () => console.log(`
      API Startup Complete
        > Port: ${API_PORT}
        > Version: ${version}
        > Environment: ${NODE_ENV}
        > Created by Navarrotech 2023
    `.trim().replaceAll(/^\s*\>/gmi, '  >')))
  })
