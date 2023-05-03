import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { coinValues } from '../consts';

export interface IdisplayWin {
  totalWin: number;
  wonBetLines: number[];
  wonAmount: number[];
}

export const initialState: IdisplayWin = {
  totalWin: 0,
  wonBetLines: [],
  wonAmount: [],
};

export const gameSettingsSlice = createSlice({
  name: 'displayWin',
  initialState,
  reducers: {
    resetWin: (state: IdisplayWin) => {
      state.totalWin = 0;
      state.wonBetLines.length = 0;
      state.wonAmount.length = 0;
    },
    applyWin: (state: IdisplayWin, action: PayloadAction<IdisplayWin>) => {
      state.totalWin = action.payload.totalWin;
      state.wonAmount = action.payload.wonAmount;
      state.wonBetLines = action.payload.wonBetLines;
    },
  },
});

export const { resetWin, applyWin } = gameSettingsSlice.actions;
