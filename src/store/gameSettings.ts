import { createSlice } from '@reduxjs/toolkit';

export interface gameSettings {
  bet: number;
  level: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  coinValue: 0.01 | 0.02 | 0.05 | 0.1 | 0.2 | 0.5 | 1.0;
  coins: number;
}

export const initGameSettingsState: gameSettings = {
  bet: 40,
  level: 1,
  coinValue: 0.01,
  coins: 0,
};

export const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState: initGameSettingsState,
  reducers: {
    increaseLevel: (state: gameSettings, action) => {
      if (state.level === 10) return;
      state.level += 1;
    },
  },
});

export const { increaseLevel } = gameSettingsSlice.actions;
