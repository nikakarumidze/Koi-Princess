import { createSlice, PayloadAction, Draft } from '@reduxjs/toolkit';
import { SymbolContainer } from '../types';
import { SYMBOL_SIZE } from '../consts';
import { randomTexture } from '../utils/utils';

export const defaultSymbolContainer: SymbolContainer[] = Array(5)
  .fill(null)
  .map(() => ({
    symbols: [
      { index: 0, texture: randomTexture(), scale: 1, x: Math.round(SYMBOL_SIZE / 2), y: 0 },
      {
        index: 1,
        texture: randomTexture(),
        scale: 1,
        x: Math.round(SYMBOL_SIZE / 2),
        y: SYMBOL_SIZE,
      },
      {
        index: 2,
        texture: randomTexture(),
        scale: 1,
        x: Math.round(SYMBOL_SIZE / 2),
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

        // Update symbol positions on reel.
        r.symbols.forEach((s, i) => {
          s.y = ((r.position + i) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
          if (s.y < 0 && s.y > SYMBOL_SIZE) {
            // Detect going over and swap a texture.
            s.texture = randomTexture();
            s.scale = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
            s.x = Math.round((SYMBOL_SIZE - s.texture.width) / 2);
          }
        });
      });
    },
  },
});

export const { symbolTicker } = symbolContainerSlice.actions;
