// Copyright © 2024 Navarrotech

// Store configuration
import { type ThunkAction, configureStore, Action } from '@reduxjs/toolkit'

// Reducers
import { slice as user } from '@/modules/auth/reducer'
import { slice as core } from '@/modules/core/reducer'
import { slice as messages } from '@/modules/messages/reducer'
import { slice as dating } from '@/modules/dating/reducer'

// Environment
import { NODE_ENV } from '@/env'

export const store = configureStore({
  reducer: {
    core: core.reducer,
    dating: dating.reducer,
    user: user.reducer,
    messages: messages.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false
    }),
  devTools: NODE_ENV === 'development'
})

export const dispatch = store.dispatch
export const getState = store.getState

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred dispatch with everything we need!
export type AppDispatch = typeof store.dispatch

export type Thunk = ThunkAction<void, RootState, unknown, Action>
