// Copyright © 2024 Navarrotech

import { createSlice } from '@reduxjs/toolkit'

// Typescript
import type { Theme } from './types'
import type { NotificationPreferences } from '@/modules/notifications'
import type { PayloadAction } from '@reduxjs/toolkit'

// Utilities
import { applyTheme } from './utility'
import { setApiDefault } from '../api'
import { defaultLanguage } from '../language'
import { getDefaultTimezone, setDefaultTimezone } from '../timezones'

export type State = {
  theme: Theme,
  language: string,
  timezone: string,
  notifications: NotificationPreferences
}

const initialState: State = {
  theme: localStorage.getItem('theme') as Theme || 'system',
  language: localStorage.getItem('language') || defaultLanguage,
  timezone: getDefaultTimezone(),
  notifications: {
    new_message: {
      email: false,
      push: true,
    },
    match: {
      email: false,
      push: true,
    },
    liked: {
      email: false,
      push: true,
    },
    daily_views: {
      email: true,
      push: false,
    },
    inspiration: {
      email: true,
      push: false,
    },
  },
}

applyTheme(initialState.theme)

export const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
      applyTheme(action.payload)
    },
    setLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload
      localStorage.setItem('language', action.payload)
      setApiDefault('language', action.payload)
    },
    setTimezone(state, action: PayloadAction<string>) {
      state.timezone = action.payload
      localStorage.setItem('timezone', action.payload)
      setDefaultTimezone(action.payload)
    },
    changeNotification(
      state,
      action: PayloadAction<{
        type: keyof NotificationPreferences,
        email?: boolean,
        push?: boolean
      }>,
    ) {
      state.notifications[action.payload.type] = {
        email: action.payload.email || state.notifications[action.payload.type].email,
        push: action.payload.push || state.notifications[action.payload.type].push,
      }
    },
  },
})

export const {
  setTheme,
  setLanguage,
  setTimezone,
  changeNotification,
} = slice.actions
