import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { ITween, SymbolContainer } from '../types';
import { SYMBOL_SIZE } from '../consts';
import { slotTextures } from '../loaders/loadSymbols';

export const defaultSymbolContainer: SymbolContainer[] = Array(5)
  .fill(null)
  .map(() => ({
    symbols: [
      {
        index: 0,
        texture: Math.round(Math.random() * (slotTextures.length - 1)),
        scale: 1,
        x: 0,
        y: 0,
      },
      {
        index: 1,
        texture: Math.round(Math.random() * (slotTextures.length - 1)),
        scale: 1,
        x: 0,
        y: SYMBOL_SIZE,
      },
      {
        index: 2,
        texture: Math.round(Math.random() * (slotTextures.length - 1)),
        scale: 1,
        x: 0,
        y: SYMBOL_SIZE * 2,
      },
    ],
    blurY: 0,
    position: 0,
    previousPosition: 0,
  }));

export const symbolContainerSlice = createSlice({
  name: 'symbolPosition',
  initialState: defaultSymbolContainer,
  reducers: {
    symbolTicker: (state: Draft<SymbolContainer[]>) => {
      // is called upon useTick
      state.forEach((r) => {
        // Update blur filter y amount based on speed.
        r.blurY = (r.position - r.previousPosition) * 8;
        r.previousPosition = r.position;
        // r.position -= 0.01
        // Update symbol positions on reel.
        r.symbols.forEach((s, i) => {
          s.y = ((r.position + i) % r.symbols.length) * SYMBOL_SIZE;
          if (s.y < 0 && s.y > SYMBOL_SIZE) {
            // Detect going over and swap a texture.
            s.texture = Math.round(Math.random() * slotTextures.length);
            // s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
            // s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
            // s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
          }
        });
      });
    },
    changePosition: (state: Draft<SymbolContainer[]>, action: PayloadAction<ITween[]>) => {
      if (!action.payload.length) return;
      for (let x = action.payload.length - 1; x >= 0; x--) {
        state[x].position = action.payload[x].object.position;
      }
    },
  },
});

export const { symbolTicker, changePosition } = symbolContainerSlice.actions;
