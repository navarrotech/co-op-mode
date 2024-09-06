// Copyright © 2024 Navarrotech

import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'
import type {
  IPreferences,
  IUser,
  IDailyLimits,
  IMonthlyLimits,
  IPermanentLimits,
} from '../protobuf/schema'

export type State = {
  current: IUser | undefined
  preferences: IPreferences | undefined
  limits: {
    daily?: IDailyLimits,
    monthly?: IMonthlyLimits,
    permanent?: IPermanentLimits,
  },
  authorized: boolean
  loading: boolean
  gatewayConnected: boolean
}

const initialState: State = {
  loading: true,
  gatewayConnected: false,

  authorized: false,
  current: undefined,
  preferences: undefined,
  limits: {
    daily: undefined,
    monthly: undefined,
    permanent: undefined,
  },
}

export const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.current = action.payload
      state.authorized = !!action.payload?.phone
      if (action.payload?.preferences) {
        // @ts-ignore
        state.preferences = action.payload.preferences
      }
      return state
    },
    setPreferences: (state, action: PayloadAction<IPreferences>) => {
      state.preferences = action.payload
      return state
    },

    setDailyLimits: (state, action: PayloadAction<IDailyLimits>) => {
      state.limits.daily = action.payload
      return state
    },
    setMonthlyLimits: (state, action: PayloadAction<IMonthlyLimits>) => {
      state.limits.monthly = action.payload
      return state
    },
    setPermanentLimits: (state, action: PayloadAction<IPermanentLimits>) => {
      state.limits.permanent = action.payload
      return state
    },

    logout: (state) => {
      state = {
        ...initialState,
        authorized: false,
        loading: false,
      }
      return state
    },
    finishInit: (state) => {
      state.loading = false
    },
    setGatewayConnected: (state, action: PayloadAction<boolean>) => {
      state.gatewayConnected = action.payload
    },
  },
})

export const {
  setUser,
  setPreferences,

  setDailyLimits,
  setMonthlyLimits,
  setPermanentLimits,

  logout,
  setGatewayConnected,
  finishInit,
} = slice.actions
