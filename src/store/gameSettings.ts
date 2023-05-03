import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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
  coins: 50000,
};

export const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState: initGameSettingsState,
  reducers: {
    increaseLevel: (state: gameSettings) => {
      if (state.level === 10) return;
      state.bet = (state.bet / state.level) * (state.level + 1);
      state.level += 1;
    },
    decreaseLevel: (state: gameSettings) => {
      if (state.level === 1) return;
      state.bet = (state.bet / state.level) * (state.level - 1);
      state.level -= 1;
    },
    increaseCoins: (state: gameSettings) => {
      const index = coinValues.indexOf(state.coinValue);
      if (index === coinValues.length - 1) return;
      state.coins = (state.coins * Number(state.coinValue)) / Number(coinValues[index + 1]);
      state.coinValue = coinValues[index + 1];
    },
    decreaseCoins: (state: gameSettings) => {
      const index = coinValues.indexOf(state.coinValue);
      if (!index) return;
      state.coins = (state.coins * Number(state.coinValue)) / Number(coinValues[index - 1]);
      state.coinValue = coinValues[index - 1];
    },
    maxBet: (state: gameSettings) => {
      state.bet = (state.bet / state.level) * 10;
      state.level = 10;
    },
    hitPlay: (state: gameSettings) => {
      state.coins -= state.bet;
    },
    addWonCoins: (state: gameSettings, action: PayloadAction<number[]>) => {
      action.payload[0] *= action.payload[1] / Number(state.coinValue);
      state.coins += action.payload[0];
    },
  },
});

export const {
  increaseLevel,
  decreaseLevel,
  increaseCoins,
  decreaseCoins,
  maxBet,
  hitPlay,
  addWonCoins,
} = gameSettingsSlice.actions;
