import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { coinValues } from '../consts';

export interface gameSettings {
  bet: number;
  level: number;
  coinValue: string;
  coins: number;
}

export const initGameSettingsState: gameSettings = {
  bet: 40,
  level: 1,
  coinValue: coinValues[0],
  coins: 0,
};

export const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState: initGameSettingsState,
  reducers: {
    increaseLevel: (state: gameSettings) => {
      if (state.level === 10) return;
      state.level += 1;
    },
    decreaseLevel: (state: gameSettings) => {
      if (state.level === 1) return;
      state.level -= 1;
    },
    increaseCoins: (state: gameSettings) => {

    },
    decreaseCoins: (state: gameSettings) => {

    },
  },
});

export const { increaseLevel, decreaseLevel,increaseCoins,decreaseCoins } = gameSettingsSlice.actions;
