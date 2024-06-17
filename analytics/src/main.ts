// Copyright © 2024 Navarrotech

// Typescript
import type ProtoBufs from "./lib/generated/ProtoTypes"
import type { ChangeType } from "./types"

// Databases
import redis from "./lib/redis"
import database from "./lib/database"

// Utility
import {
    incrementDatingProfileAnalytics
} from "./utility"

// Constants
import {
    expireGlobalHistoryAfterSeconds,
    prefix,
    structsToTableTypes,
    today
} from "./constants"

type Handler = {
    [K in keyof typeof structsToTableTypes]: (type: ChangeType, data: ReturnType<typeof ProtoBufs[K]['create']>) => Promise<void>
}

const Handlers: Handler = {
    User: async function userHandler(type, data) {
        return
    },
    Preferences: async function preferencesHandler(type, data) {
        return
    },
    DatingProfile: async function datingProfileHandler(type, data) {
        return
    },
    Likes: async function likesHandler(type, data) {
        if (type === 'UPDATE') {
            return
        }
        const amount = type === 'CREATE' ? 1 : -1

        incrementDatingProfileAnalytics(
            data.owner_id,
            data.is_super ? 'superlikes' : 'likes',
            amount
        )
        return
    },
    Dislikes: async function dislikesHandler(type, data) {
        if (type === 'UPDATE') {
            return
        }
        const amount = type === 'CREATE' ? 1 : -1
        incrementDatingProfileAnalytics(data.owner_id, 'dislikes', amount)
        return
    },
    Media: async function mediaHandler(type, data) {
        return
    },
    Limits: async function limitsHandler(type, data) {
        return
    },
    Status: async function statusHandler(type, data) {
        return
    },
    Conversations: async function conversationsHandler(type, data) {
        if (type === 'CREATE') {
            incrementDatingProfileAnalytics(data.user1_id, 'matches', 1)
            incrementDatingProfileAnalytics(data.user2_id, 'matches', 1)
        }
        return
    },
    Messages: async function messagesHandler(type, data) {
        return
    },
}

// Apply global analytics with a specific struct and type
export async function applyGlobalAnalytics<T extends keyof typeof structsToTableTypes>(struct: T, type: ChangeType, data: ReturnType<typeof ProtoBufs[T]['create']>) {
    const [ globalIncrease ] = await Promise.all([
        // Global analytic increase
        redis.incr(`${prefix}:global:${struct}:${type}`),
    
        // History of increasing
        // Expires after 30 days
        redis.incr(
            `${prefix}:${today()}:${struct}:${type}`
        ),
        redis.expire(
            `${prefix}:${today()}:${struct}:${type}`,
            expireGlobalHistoryAfterSeconds
        )
    ])
    console.log(
        `  + ${prefix}:global:${struct}:${type} global analytics incremented to ${globalIncrease}`
    )
}

export default Handlers
