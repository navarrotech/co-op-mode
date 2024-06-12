// Copyright © 2024 Navarrotech

import * as ProtoBufLibrary from "./schema"

// import schema from './schema?raw'

// export type Message = protobuf.Message

// let schemaText = schema
// if (process.env.NODE_ENV == 'production') {
//     // TODO: On build production, schema.proto should be encrypted in base64!
//     schemaText = atob(schema)
// }

// const proto = protobuf.parse(schemaText, { keepCase: true }).root

export const ProtoBufs = {
    ServerError: ProtoBufLibrary.ServerError,
    ClientError: ProtoBufLibrary.ClientError,
    User: ProtoBufLibrary.User,
    Preferences: ProtoBufLibrary.Preferences,
    DatingProfile: ProtoBufLibrary.DatingProfile,
    Likes: ProtoBufLibrary.Likes,
    Dislikes: ProtoBufLibrary.Dislikes,
    Media: ProtoBufLibrary.Media,
    PermanentLimits: ProtoBufLibrary.PermanentLimits,
    DailyLimits: ProtoBufLibrary.DailyLimits,
    MonthlyLimits: ProtoBufLibrary.MonthlyLimits,
    Conversations: ProtoBufLibrary.Conversations,
    Messages: ProtoBufLibrary.Messages,
    VideoGames: ProtoBufLibrary.VideoGames,
    LoginRequest: ProtoBufLibrary.LoginRequest,
    AuthResponse: ProtoBufLibrary.AuthResponse,
    SyncResponse: ProtoBufLibrary.SyncResponse,
}

export type ProtoBufMessages = keyof typeof ProtoBufs

export default ProtoBufs
