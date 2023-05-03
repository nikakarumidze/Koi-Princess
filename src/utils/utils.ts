import { MatrixType, SymbolContainer } from '../types';
import { Graphics as PixiGraphics } from 'pixi.js';
import { REEL_WIDTH } from '../consts';

export const easing = (t: number) => --t * t * (1.4 * t + 0.4) + 1;
export const lerp = (a1: number, a2: number, t: number): number => a1 * (1 - t) + a2 * t;

export const columnMask = (g: PixiGraphics) => {
  g.beginFill();
  g.drawRect(0, 0, REEL_WIDTH * 5, REEL_WIDTH * 3);
  g.endFill();
};

export const createMatrix = (container: SymbolContainer[]): MatrixType => {
  return container.map((subContainer) => {
    const symbols = [...subContainer.symbols].sort((a, b) => a.y - b.y);

    return symbols.map((symbol) => symbol.texture);
  });
};
