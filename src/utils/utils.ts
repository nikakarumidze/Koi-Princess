import { slotTextures } from './loadSymbols';

// Generates Random Texture
export const randomTexture = () => slotTextures[Math.floor(Math.random() * slotTextures.length)];

// Linear Interpolation function
export function lerp(a1: number, a2: number, t: number): number {
  return a1 * (1 - t) + a2 * t;
}

// Tweening backout function
export function backout(amount: number): (t: number) => number {
  return (t: number) => --t * t * ((amount + 1) * t + amount) + 1;
}
