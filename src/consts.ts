import { TextStyle } from "pixi.js";

export const lineCount = 5;
export const lineLength = 3;
export const defaultSlotArr = new Array(lineCount).fill(0).map(() => new Array(lineLength).fill(0));

export const slotTextures = [
  './assets/symbols/a.png',
  './assets/symbols/k.png',
  './assets/symbols/q.png',
  './assets/symbols/j.png',
];

export function lerp(a1: number, a2: number, t: number): number {
  return a1 * (1 - t) + a2 * t;
}

export function backout(amount: number): (t: number) => number {
  return (t: number) => --t * t * ((amount + 1) * t + amount) + 1;
}
export const style = new TextStyle({
  fontFamily: 'Arial',
  fontSize: 36,
  fontStyle: 'italic',
  fontWeight: 'bold',
  fill: ['#ffffff', '#00ff99'], // gradient
  stroke: '#4a1850',
  strokeThickness: 5,
  dropShadow: true,
  dropShadowColor: '#000000',
  dropShadowBlur: 4,
  dropShadowAngle: Math.PI / 6,
  dropShadowDistance: 6,
  wordWrap: true,
  wordWrapWidth: 440,
});
