// Copyright © 2024 Navarrotech

// Typescript
import type { ChangeType } from "./types"
import type { users } from "@prisma/client"

// Socket.io
import http from "http"
import { Server, type Socket } from "socket.io"

// Lib
import ProtoBufs from "./lib/generated/ProtoTypes"
import database from "./lib/database"
import { redisStore } from "./lib/redis"
import expressSession from "express-session"
import sharedsession from "express-socket.io-session"
import { v4 as uuid } from "uuid"

// Constants
import { structsToTableTypes } from "./constants"
import { PORT, SESSION_SECRET } from "./env"

// Sessions!
const session = expressSession({
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
})

const server = http.createServer()
const io = new Server(server)

const connectionsByUserId: Record<string, Socket[]> = {}

type Handler = {
    [K in keyof typeof structsToTableTypes]: (type: ChangeType, data: ReturnType<typeof ProtoBufs[K]['create']>, rawProtobufBinary: any) => Promise<void>
}

function publish(
    struct: keyof typeof structsToTableTypes,
    sockets: Socket[],
    type: ChangeType,
    data: any,
    buffer: any,
) {
    if (!sockets?.length) {
        return
    }
    try {
        sockets.forEach((socket) => {
            socket.emit('change', buffer)
            socket.emit(`${struct}:${type}`, buffer)
        })
        console.log(`Published ${struct}:${type} to ${sockets.length} sockets`)
    }
    catch (error: any) {
        console.error(`Error publishing ${struct}:${type} to sockets:`, error)
    }
}

const Handlers: Handler = {
    User: async function userHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.id]
        publish("User", sockets, type, data, buffer)
    },
    Preferences: async function preferencesHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.owner_id]
        publish("Preferences", sockets, type, data, buffer)
    },
    DatingProfile: async function datingProfileHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.owner_id]
        publish("DatingProfile", sockets, type, data, buffer)
    },
    Likes: async function likesHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.owner_id]
        publish("Likes", sockets, type, data, buffer)
    },
    Dislikes: async function dislikesHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.owner_id]
        publish("Dislikes", sockets, type, data, buffer)
    },
    Media: async function mediaHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.owner_id]

        publish("Media", sockets, type, data, buffer)
    },
    Limits: async function limitsHandler(type, data, buffer) {
        const owner_id = data.daily?.owner_id || data.monthly?.owner_id || data.permanent?.owner_id

        if (!owner_id) {
            return
        }

        const sockets = connectionsByUserId[owner_id]

        publish("Limits", sockets, type, data, buffer)
    },
    Status: async function statusHandler(type, data, buffer) {
        const sockets = connectionsByUserId[data.owner_id]
        publish("Status", sockets, type, data, buffer)
    },
    Conversations: async function conversationsHandler(type, data, buffer) {
        const sockets1 = connectionsByUserId[data.user1_id]
        publish("Conversations", sockets1, type, data, buffer)
        const sockets2 = connectionsByUserId[data.user2_id]
        publish("Conversations", sockets2, type, data, buffer)
    },
    Messages: async function messagesHandler(type, data, buffer) {
        // Send to the owner
        const sockets = connectionsByUserId[data.owner_id]
        publish("Messages", sockets, type, data, buffer)

        // Send to the receipient
        const conversation = await database.conversations.findUnique({
            where: {
                id: data.conversation_id
            }
        })

        if (!conversation) {
            return
        }

        let ownerIsFirst = conversation.user1_id === data.owner_id
        let ownerIsSecond = conversation.user2_id === data.owner_id

        // Should never occur but you can never be too safe!
        if (!ownerIsFirst && !ownerIsSecond) {
            return
        }

        // Notify the other person in the conversation! :)
        if (ownerIsFirst){
            const sockets = connectionsByUserId[conversation.user2_id]
            publish("Messages", sockets, type, data, buffer)
        }
        else if (ownerIsSecond){
            const sockets = connectionsByUserId[conversation.user1_id]
            publish("Messages", sockets, type, data, buffer)
        }
    },
}


const unauthorizedProtoMessage = ProtoBufs.AuthResponse.encode(
    ProtoBufs.AuthResponse.create({
        authorized: false,
        message: "Unauthorized"
    })
).finish()

type SessionedSocket = Socket & {
    handshake: {
        session?: {
            user: users,
            authorized: boolean
        }
    }
}

io.use(
    sharedsession(session)
)

io.on('connection', (socket: SessionedSocket) => {
    console.log('New connection')

    const user = socket.handshake.session?.user
    const authorized = socket.handshake.session?.authorized
    const userId = user?.id

    if (!user || !userId || !authorized) {
        console.log("Rejecting unauthorized connection")
        socket.send(unauthorizedProtoMessage)
        socket.disconnect()
        return
    }

    socket.on('message', (msg) => {
        console.log('Message received:', msg)
    })

    socket.on('disconnect', () => {
        connectionsByUserId[userId] = connectionsByUserId[userId].filter((s) => s !== socket)
        if (!connectionsByUserId[userId].length) {
            delete connectionsByUserId[userId]
        }
    })

    if (!connectionsByUserId[userId]) {
        connectionsByUserId[userId] = []
    }
    connectionsByUserId[userId].push(socket)
})

export function initGateway() {
    io.listen(PORT)
}

export function closeGateway(){
    io.close()
}

export default Handlers
