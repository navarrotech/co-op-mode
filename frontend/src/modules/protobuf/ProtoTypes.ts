/* eslint-disable no-unused-vars */
// @ts-nocheck Copyright © 2024 Navarrotech

// THIS FILE IS AUTO COPIED FROM THE ROOT
// AND IS COPIED TO API & FRONTEND & ANALYTICS

// Types won't work in this specific file, but they work after copied to other places
import * as ProtoBufLibrary from "./schema"

const {
    // Pull out enums manually for typescript
    // If a new enum is added, it must be manually added to the generated types
    Cannabis,
    Drinks,
    Education,
    FamilyPlans,
    Gender,
    HeightUnit,
    Personality,
    Platforms,
    Relationship,
    Seeking,
    Smokes,
    Sexuality,
    Workout,
    EditHistory,
    ChangeType,

    // After we pulled out all the enums above, all we have is a bunch of tables.
    // We do this for typescript safety and automated typing generation
    ...ProtoBufs
} = ProtoBufLibrary

export type ProtoBufsTypes = {
    IFormInvalid: ProtoBufLibrary.IFormInvalid
    IFormsInvalid: ProtoBufLibrary.IFormsInvalid
    IUser: ProtoBufLibrary.IUser
    IPreferences: ProtoBufLibrary.IPreferences
    IDatingProfile: ProtoBufLibrary.IDatingProfile
    IStatus: ProtoBufLibrary.IStatus
    IEmitStatus: ProtoBufLibrary.IEmitStatus
    ILimits: ProtoBufLibrary.ILimits
    IPermanentLimits: ProtoBufLibrary.IPermanentLimits
    IDailyLimits: ProtoBufLibrary.IDailyLimits
    IMonthlyLimits: ProtoBufLibrary.IMonthlyLimits
    IMedia: ProtoBufLibrary.IMedia
    ILikes: ProtoBufLibrary.ILikes
    IDislikes: ProtoBufLibrary.IDislikes
    IConversations: ProtoBufLibrary.IConversations
    IConversationList: ProtoBufLibrary.IConversationList
    IMessages: ProtoBufLibrary.IMessages
    IEditMessage: ProtoBufLibrary.IEditMessage
    IEditHistory: ProtoBufLibrary.IEditHistory
    IMessagelist: ProtoBufLibrary.IMessagelist
    IVideoGames: ProtoBufLibrary.IVideoGames
    IAuthorizeByPhoneRequest: ProtoBufLibrary.IAuthorizeByPhoneRequest
    IAuthResponse: ProtoBufLibrary.IAuthResponse
    ISyncResponse: ProtoBufLibrary.ISyncResponse
    IDataProfilesForYou: ProtoBufLibrary.IDataProfilesForYou
    IServerError: ProtoBufLibrary.IServerError
    IClientError: ProtoBufLibrary.IClientError
    ISpecifyRequest: ProtoBufLibrary.ISpecifyRequest
    IBlank: ProtoBufLibrary.IBlank
    IChangeEvent: ProtoBufLibrary.IChangeEvent
}

export {
    ProtoBufs
}
