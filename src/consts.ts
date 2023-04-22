import { TextStyle } from 'pixi.js';
import { SymbolContainer, Symbol } from './types';

export const REEL_WIDTH = 160;
export const SYMBOL_SIZE = 150;
export const lineCount = 5;
export const lineLength = 3;
export const defaultSlotArr: SymbolContainer[] = Array(5).fill({
  symbols: [
    { index: 0, scale: [1], x: Math.round(SYMBOL_SIZE / 2), y: 0 },
    { index: 1, scale: [1], x: Math.round(SYMBOL_SIZE / 2), y: SYMBOL_SIZE },
    { index: 2, scale: [1], x: Math.round(SYMBOL_SIZE / 2), y: SYMBOL_SIZE * 2 },
  ],
  blur: 0,
  position: 0,
  previousPosition: 0,
});

export const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
export const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

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

export const tweening: ITween[] = [];

export interface ITween {
  object: any;
  property: string;
  propertyBeginValue: number;
  target: number;
  easing: (t: number) => number;
  time: number;
  change?: any;
  complete?: any;
  start: number;
}

export function tweenTo(
  object: any,
  property: string,
  target: number,
  time: number,
  easing: (t: number) => number,
  onchange?: any,
  oncomplete?: any
): ITween {
  const tween: ITween = {
    object,
    property,
    propertyBeginValue: object[property],
    target,
    easing,
    time,
    change: onchange,
    complete: oncomplete,
    start: Date.now(),
  };

  tweening.push(tween);
  return tween;
}

// export const startPlay = (running: boolean, setRunning: React.Dispatch<boolean>) => {
//   if (running) return;
//   setRunning(true);

//   reels.forEach((r, i) => {
//     const extra = Math.floor(Math.random() * 3);
//     const [target, time] = [r.position + 10 + i * 5 + extra, 2500 + i * 600 + extra * 600];
//     tweenTo(
//       r,
//       'position',
//       target,
//       time,
//       backout(0.5),
//       null,
//       i === reels.length - 1 ? setRunning(false) : null
//     );
//   });
// };
