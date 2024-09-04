// Copyright © 2024 Navarrotech

import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { IMessages, IConversations } from '../protobuf/schema'

export type State = {
  last100UnreadMessages: IMessages[],
  conversations: IConversations[],
}

const initialState: State = {
  last100UnreadMessages: [],
  conversations: []
}

export const slice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    setMessages(state, action: PayloadAction<IMessages[]>) {
      state.last100UnreadMessages = action.payload
      return state
    },
    upsertMessage(state, action: PayloadAction<IMessages>) {
      const index = state.last100UnreadMessages.findIndex(message => message.id === action.payload.id)
      if (index !== -1) {
        state.last100UnreadMessages[index] = action.payload
      }
      else {
        state.last100UnreadMessages.push(action.payload)
      }
      return state
    },
    updateMessage(state, action: PayloadAction<IMessages>) {
      const index = state.last100UnreadMessages.findIndex(message => message.id === action.payload.id)
      if (index !== -1) {
        state.last100UnreadMessages[index] = action.payload
      }
      return state
    },
    deleteMessage(state, action: PayloadAction<IMessages>) {
      state.last100UnreadMessages = state.last100UnreadMessages.filter(message => message.id !== action.payload.id)
      return state
    },

    setConversations(state, action: PayloadAction<IConversations[]>) {
      state.conversations = action.payload
      return state
    },
    upsertConversation(state, action: PayloadAction<IConversations>) {
      const index = state.conversations.findIndex(conversation => conversation.id === action.payload.id)
      if (index !== -1) {
        state.conversations[index] = action.payload
      }
      else {
        state.conversations.push(action.payload)
      }
      return state
    },
    updateConversation(state, action: PayloadAction<IConversations>) {
      const index = state.conversations.findIndex(conversation => conversation.id === action.payload.id)
      if (index !== -1) {
        state.conversations[index] = action.payload
      }
      return state
    },
    deleteConversation(state, action: PayloadAction<IConversations>) {
      state.conversations = state.conversations.filter(conversation => conversation.id !== action.payload.id)
      return state
    }
  }
})

export const {
  setMessages,
  upsertMessage,
  updateMessage,
  deleteMessage,

  setConversations,
  upsertConversation,
  updateConversation,
  deleteConversation
} = slice.actions
