// Copyright © 2024 Navarrotech

import { createSlice } from '@reduxjs/toolkit'

// Typescript
import type { Theme } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

// Utilities
import { applyTheme } from './utility'
import { setApiDefault } from '../api'
import { defaultLanguage } from '../language'

export type State = {
  theme: Theme,
  language: string,
}

const initialState: State = {
  theme: localStorage.getItem('theme') as Theme || 'system',
  language: localStorage.getItem('language') || defaultLanguage
}

applyTheme(initialState.theme)

const slice = createSlice({
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
    }
  }
})

export const {
  setTheme,
  setLanguage
} = slice.actions

export default slice
