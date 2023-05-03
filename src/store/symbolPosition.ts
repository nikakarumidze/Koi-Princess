import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { ITween, SymbolContainer } from '../types';
import { REEL_WIDTH, SYMBOL_SIZE } from '../consts';
import { slotTextures } from '../loaders/loadSymbols';

export const defaultSymbolContainer: SymbolContainer[] = Array(5)
  .fill(null)
  .map(() => ({
    symbols: [
      {
        index: 0,
        texture: Math.floor(Math.random() * slotTextures.length),
        scale: 1,
        x: 0,
        y: 0,
      },
      {
        index: 1,
        texture: Math.floor(Math.random() * slotTextures.length),
        scale: 1,
        x: 0,
        y: SYMBOL_SIZE,
      },
      {
        index: 2,
        texture: Math.floor(Math.random() * slotTextures.length),
        scale: 1,
        x: 0,
        y: SYMBOL_SIZE * 2,
      },
    ],
    blurY: 0,
    position: 0,
    previousPosition: 0,
  }));

const symbolSpacing = SYMBOL_SIZE * 1.1;
export const symbolContainerSlice = createSlice({
  name: 'symbolPosition',
  initialState: defaultSymbolContainer,
  reducers: {
    symbolTicker: (state: Draft<SymbolContainer[]>) => {
      state.forEach((r) => {
        // Update blur filter y amount based on speed.
        r.blurY = (r.position - r.previousPosition) * 8;
        r.previousPosition = r.position;
        r.symbols.forEach((s, i) => {
          const prev = s.y;
          s.y = ((r.position + i) % r.symbols.length) * symbolSpacing + 20;
          if (s.y > REEL_WIDTH * 3 - 20 && prev < 3 * REEL_WIDTH - 20) {
            s.texture = Math.floor(Math.random() * slotTextures.length);
          }
        });
      });
    },
    changePosition: (state: Draft<SymbolContainer[]>, action: PayloadAction<ITween[]>) => {
      if (!action.payload.length || action.payload[0].object.position === undefined) return;
      action.payload.forEach((obj, i) => (state[i].position = obj.object.position));
    },
  },
});

export const { symbolTicker, changePosition } = symbolContainerSlice.actions;
