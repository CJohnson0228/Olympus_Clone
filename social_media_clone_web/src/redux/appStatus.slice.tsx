import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from './store';

interface ApplicationState {
  darkMode: boolean,
  sideMenuOpen: boolean,
  auth: boolean,
}

const initialState: ApplicationState = {
  darkMode: false,
  sideMenuOpen: false,
  auth: false,
}

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.sideMenuOpen = !state.sideMenuOpen
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode
    }
  }
})

export const { toggleMenu, toggleTheme } = appStateSlice.actions

export const selectAppState = (state: RootState) => state

export default appStateSlice.reducer