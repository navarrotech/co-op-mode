
// Store configuration
import { type ThunkAction, configureStore, Action } from '@reduxjs/toolkit'

// Reducers
import core from '@/modules/core/reducer'
import user from '@/modules/auth/reducer'

const store = configureStore({
  reducer: {
    core: core.reducer,
    user: user.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    thunk: true,
    serializableCheck: false
  }),
  devTools: process.env.NODE_ENV === 'development'
})

export const dispatch = store.dispatch;
export const getState = store.getState;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred dispatch with everything we need!
export type AppDispatch = typeof store.dispatch

export type Thunk = ThunkAction<void, RootState, unknown, Action>

export default store;
