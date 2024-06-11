// Copyright © 2024 Navarrotech

import { createSlice } from "@reduxjs/toolkit"

// Typescript
import type { Theme } from "./types"
import type { PayloadAction } from "@reduxjs/toolkit"

// Utilities
import { applyTheme } from "./utility"

export type State = {
  theme: Theme
}

const initialState: State = {
  theme: localStorage.getItem('theme') as Theme || 'system'
}

applyTheme(initialState.theme)

const slice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>){
      state.theme = action.payload
      localStorage.setItem('theme', action.payload)
      applyTheme(action.payload)
    },
  }
})

export const {
  setTheme,
} = slice.actions

export default slice;
