// Copyright © 2024 Navarrotech

import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type { IDatingProfile, IMedia, IStatus } from '../protobuf/schema'

export type State = {
  profile: IDatingProfile | undefined
  media: IMedia[]
  status: IStatus | undefined
  // A list of profiles that are "for you", sorted by server
  // Null when loading
  forYou: IDatingProfile[] | null
  // The last 3 profiles that were liked/disliked can be undone
  undoHistory: IDatingProfile[]
}

const initialState: State = {
  profile: undefined,
  media: [],
  status: undefined,
  forYou: [],
  undoHistory: [],
}

export const slice = createSlice({
  name: 'dating',
  initialState,
  reducers: {
    setProfile(state, action: PayloadAction<IDatingProfile>) {
      state.profile = action.payload
      return state
    },
    updateProfile(state, action: PayloadAction<IDatingProfile>) {
      state.profile = action.payload
      return state
    },

    setMedia(state, action: PayloadAction<IMedia[]>) {
      state.media = action.payload
      return state
    },
    upsertMedia(state, action: PayloadAction<IMedia>) {
      const index = state.media.findIndex(media => media.id === action.payload.id)
      if (index !== -1) {
        state.media[index] = action.payload
      }
      else {
        state.media.push(action.payload)
      }
      return state
    },
    updateMedia(state, action: PayloadAction<IMedia>) {
      const index = state.media.findIndex(media => media.id === action.payload.id)
      if (index !== -1) {
        state.media[index] = action.payload
      }
      return state
    },
    deleteMedia(state, action: PayloadAction<IMedia>) {
      state.media = state.media.filter(media => media.id !== action.payload.id)
      return state
    },
    upsertForYou(state, action: PayloadAction<IDatingProfile[]>) {
      state.forYou = [ ...state.forYou, ...action.payload, ]
      return state
    },
    likeProfile(state, action: PayloadAction<IDatingProfile>) {
      state.forYou = state.forYou.filter(profile => profile.id !== action.payload.id)
      state.undoHistory.unshift(action.payload)
      state.undoHistory = state.undoHistory.slice(0, 3)
      return state
    },
    passProfile(state, action: PayloadAction<IDatingProfile>) {
      state.forYou = state.forYou.filter(profile => profile.id !== action.payload.id)
      state.undoHistory.unshift(action.payload)
      state.undoHistory = state.undoHistory.slice(0, 3)
      return state
    },
    undoLastProfile(state) {
      const lastProfile = state.undoHistory.pop()
      if (lastProfile) {
        state.forYou.unshift(lastProfile)
      }
      return state
    },
  },
})

export const {
  setProfile,
  updateProfile,

  setMedia,
  upsertMedia,
  updateMedia,
  deleteMedia,

  upsertForYou,
  likeProfile,
  passProfile,
  undoLastProfile,
} = slice.actions
