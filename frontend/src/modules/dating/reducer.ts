// Copyright © 2024 Navarrotech

import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { IDatingProfile, IMedia, IStatus } from "../protobuf/schema"

export type State = {
  profile: IDatingProfile | undefined
  media: IMedia[]
  status: IStatus | undefined
}

const initialState: State = {
  profile: undefined,
  media: [],
  status: undefined
}

const slice = createSlice({
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
      } else {
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
    }
  }
})

export const {
  setProfile,
  updateProfile,

  setMedia,
  upsertMedia,
  updateMedia,
  deleteMedia,
} = slice.actions

export default slice
