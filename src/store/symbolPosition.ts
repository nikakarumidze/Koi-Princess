import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SymbolContainer } from '../types';
import { SYMBOL_SIZE } from '../consts';

export const defaultSymbolContainer: SymbolContainer[] = Array(5).fill({
  symbols: [
    { index: 0, scale: [1], x: Math.round(SYMBOL_SIZE / 2), y: 0 },
    { index: 1, scale: [1], x: Math.round(SYMBOL_SIZE / 2), y: SYMBOL_SIZE },
    { index: 2, scale: [1], x: Math.round(SYMBOL_SIZE / 2), y: SYMBOL_SIZE * 2 },
  ],
  blur: 0,
  position: 0,
  previousPosition: 0,
});

export const symbolContainerSlice = createSlice({
  name: 'symbolPosition',
  initialState: defaultSymbolContainer,
  reducers: {
    doSmth: (state: SymbolContainer[], action: PayloadAction) => {
      console.log(state);
    },
  },
});

export const { doSmth } = symbolContainerSlice.actions;
