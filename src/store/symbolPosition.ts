import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SymbolContainer } from '../types';
import { SYMBOL_SIZE } from '../consts';
import { randomTexture } from '../utils/utils';

export const defaultSymbolContainer: SymbolContainer[] = Array(5).fill(null).map(() => ({
  symbols: [
    { index: 0, texture: randomTexture(), scale: 1, x: Math.round(SYMBOL_SIZE / 2), y: 0 },
    { index: 1, texture: randomTexture(), scale: 1, x: Math.round(SYMBOL_SIZE / 2), y: SYMBOL_SIZE },
    { index: 2, texture: randomTexture(), scale: 1, x: Math.round(SYMBOL_SIZE / 2), y: SYMBOL_SIZE * 2 },
  ],
  blurY: 0,
  position: 0,
  previousPosition: 0,
}));

export const symbolContainerSlice = createSlice({
  name: 'symbolPosition',
  initialState: defaultSymbolContainer,
  reducers: {
    symbolTicker: (state: SymbolContainer[]) => {
      // is called upon useTick
      for (let i = 0; i < state.length; i++) {
        const r = state[i];
        // Update blur filter y amount based on speed.
        // This would be better if calculated with time in mind also. Now blur depends on frame rate.
        r.blurY = (r.position - r.previousPosition) * 8;
        r.previousPosition = r.position;

        // Update symbol positions on reel.
        for (let j = 0; j < r.symbols.length; j++) {
          const s = r.symbols[j];
          const prevy = s.y;
          s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
          if (s.y < 0 && prevy > SYMBOL_SIZE) {
            // Detect going over and swap a texture.
            // This should in proper product be determined from some logical reel.
            s.texture = randomTexture();
            s.scale = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
            s.x = Math.round((SYMBOL_SIZE - s.texture.width) / 2);
          }
        }
      }
    },
  },
});

export const { symbolTicker } = symbolContainerSlice.actions;
