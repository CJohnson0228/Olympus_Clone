import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';

type UserInfo = {
  name: string | null,
  email: string | null,
  uid: string | null,
}

export type UserState = {
  user:  UserInfo | null | undefined
}

const initialState: UserState = { user: null }

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export const selectUser = (state: RootState) => state

export default userSlice.reducer