import { TextStyle, Texture } from 'pixi.js';
import a from './assets/symbols/a.png';
import k from './assets/symbols/k.png';
import q from './assets/symbols/q.png';

export const lineCount = 5;
export const lineLength = 3;
export const defaultSlotArr = new Array(lineCount).fill(0).map(() => new Array(lineLength).fill(0));

export const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
export const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

export const slotTextures = [a, k, q, k];

export const randomTexture = () =>
  Texture.from(slotTextures[Math.floor(Math.random() * slotTextures.length)]);

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
