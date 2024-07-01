// Copyright © 2024 Navarrotech

import type { IChangeEvent } from "./protobuf/schema"

import { GATEWAY_URL, NODE_ENV } from "@/env"
import socketio from "socket.io-client"
import ProtoBufs from "./protobuf";

// Redux
// import { dispatch } from "@/store"
// import { setUser } from "./auth/reducer";

// Define a type that ensures the required property for a specific key
type RequiredProperty<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// Create a mapped type that makes the specified key required
type ChangeEvent<K extends keyof IChangeEvent> = RequiredProperty<IChangeEvent, K>;

// type ChangeType = "CREATE" | "UPDATE" | "DELETE"

const io = socketio(GATEWAY_URL, {
  transports: ["websocket"],
})

io.on("connect", () => {
  console.log("Connected to gateway")
})
io.on("error", (error: Error) => {
  console.error("Error from gateway", error)
})
io.on("disconnect", () => {
  console.log("Disconnected from gateway")
})

function parseProto<T extends keyof typeof ProtoBufs, K = any>(struct: T, rawResponse: ArrayBuffer): K | undefined {
  const returnConstruct = ProtoBufs[struct]

  try {
    const body = returnConstruct.decode(
        new Uint8Array(rawResponse)
    )

    const data = body.toJSON()
    if (NODE_ENV === 'development') {
        console.log("Decoded gateway data:", data)
    }

    return data as K
  } catch (error: any){
      console.log(error)
      return undefined
  }
}

//////////////////////////////////////////
// User

io.on("User", (data: ArrayBuffer) => {
  const { user } = parseProto("User", data) as ChangeEvent<"user">;
  if (!user) {
    console.error("User not found in published data down user stream? ", data)
    return
  }

  console.log("User changed: ", data)
})
io.on("Preferences", (data: ArrayBuffer) => {
  const { preferences } = parseProto("Preferences", data) as ChangeEvent<"preferences">;
  if (!preferences) {
    console.error("Preferences not found in published data down preferences stream? ", data)
    return
  }

  console.log("Preferences changed: ", data)
})
io.on("Limits", (data: ArrayBuffer) => {
  const { limits } = parseProto("Limits", data) as ChangeEvent<"limits">;
  if (!limits) {
    console.error("Limits not found in published data down preferences stream? ", data)
    return
  }

  console.log("Limits changed: ", data)
})

//////////////////////////////////////////
// Likes reducer

io.on("Likes", (data: ArrayBuffer) => {
  const { likes } = parseProto("Likes", data) as ChangeEvent<"likes">;
  if (!likes) {
    console.error("Likes not found in published data down preferences stream? ", data)
    return
  }

  console.log("Likes changed: ", data)
})
io.on("Dislikes", (data: ArrayBuffer) => {
  const { dislikes } = parseProto("Dislikes", data) as ChangeEvent<"dislikes">;
  if (!dislikes) {
    console.error("Dislikes not found in published data down preferences stream? ", data)
    return
  }

  console.log("Dislikes changed: ", data)
})

//////////////////////////////////////////
// Profile reducer

io.on("DatingProfile", (data: ArrayBuffer) => {
  const { dating_profile: datingProfile } = parseProto("DatingProfile", data) as ChangeEvent<"dating_profile">;
  if (!datingProfile) {
    console.error("datingProfile not found in published data down preferences stream? ", data)
    return
  }

  console.log("DatingProfile changed: ", data)
})
io.on("Media", (data: ArrayBuffer) => {
  const { media } = parseProto("Media", data) as ChangeEvent<"media">;
  if (!media) {
    console.error("Media not found in published data down preferences stream? ", data)
    return
  }

  console.log("Media changed: ", data)
})
io.on("Status", (data: ArrayBuffer) => {
  const { status } = parseProto("Status", data) as ChangeEvent<"status">;
  if (!status) {
    console.error("Status not found in published data down preferences stream? ", data)
    return
  }

  console.log("Status changed: ", data)
})

//////////////////////////////////////////
// Messages reducer

io.on("Conversations", (data: ArrayBuffer) => {
  const { conversations } = parseProto("Conversations", data) as ChangeEvent<"conversations">;
  if (!conversations) {
    console.error("Conversations not found in published data down preferences stream? ", data)
    return
  }

  console.log("Conversations changed: ", data)
})
io.on("Messages", (data: ArrayBuffer) => {
  const { messages } = parseProto("Messages", data) as ChangeEvent<"messages">;
  if (!messages) {
    console.error("Messages not found in published data down preferences stream? ", data)
    return
  }

  console.log("Messages changed: ", data)
})

export async function startGateway() {
  io.connect()
}

export async function stopGateway() {
  io.disconnect()
}
