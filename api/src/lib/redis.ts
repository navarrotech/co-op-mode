// Copyright © 2024 Navarrotech

import RedisStore from "connect-redis"
import { createClient } from "redis"
import { REDIS_URL } from "@/env"

let redisClient = createClient({
    url: REDIS_URL,
})

export const redisStore = new RedisStore({
    client: redisClient,
    prefix: "sess:",
})

export async function initRedis() {
    redisClient.on("connect", () => {
        console.log("[PASS] Redis ready")
    })

    await redisClient.connect().catch(console.error)

    redisClient.on("error", (err) => {
        console.error("[Redis Error] :: " + err)
    })
}

export async function closeRedis() {
    await redisClient.disconnect().catch(console.error)
}

export default redisClient
