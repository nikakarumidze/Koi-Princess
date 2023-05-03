import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IcalculateWin } from '../types';

export const initialState: IcalculateWin = {
  totalWin: 0,
  singleWins: [],
};

export const displayWinSlice = createSlice({
  name: 'displayWin',
  initialState,
  reducers: {
    resetWin: (state: IcalculateWin) => {
      state.totalWin = 0;
      state.singleWins.length = 0;
    },
    applyWin: (state: IcalculateWin, action: PayloadAction<IcalculateWin>) => {
      state.totalWin = action.payload.totalWin;
      state.singleWins = action.payload.singleWins;
    },
  },
});

export const { resetWin, applyWin } = displayWinSlice.actions;
