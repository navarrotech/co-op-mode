// Copyright © 2024 Navarrotech

import { createSlice } from "@reduxjs/toolkit"

import type { PayloadAction } from "@reduxjs/toolkit"
import type { Preferences, User } from "../protobuf/schema"

export type State = {
  current: User | undefined
  preferences: Preferences | undefined
  sid?: string
  authorized: boolean
  loading: boolean
}

const initialState: State = {
  authorized: false,
  loading: true,
  sid: undefined,
  current: undefined,
  preferences: undefined,
}

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.current = action.payload
      state.loading = false
      state.authorized = !!action.payload?.phone
      if (action.payload?.preferences) {
        // @ts-ignore
        state.preferences = action.payload.preferences
      }
      return state;
    },
    setPreferences: (state, action: PayloadAction<Preferences>) => {
      state.preferences = action.payload
      return state;
    },
    logout: (state) => {
      state = {
        ...initialState,
        authorized: false,
        loading: false
      }
      return state;
    },
    finishInit: (state) => {
      state.loading = false
    },
  }
})

export const {
  setUser,
  setPreferences,
  finishInit,
  logout,
} = slice.actions

export default slice
