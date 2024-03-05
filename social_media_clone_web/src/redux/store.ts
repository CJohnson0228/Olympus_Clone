import { configureStore } from '@reduxjs/toolkit'
import userReducer from './user.slice'
import appStateReducer from './appStatus.slice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    appState: appStateReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch