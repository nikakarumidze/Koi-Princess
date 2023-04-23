import { TextStyle } from 'pixi.js';
import { SymbolContainer, Symbol } from './types';

export const REEL_WIDTH = 160;
export const SYMBOL_SIZE = 150;
export const lineCount = 5;
export const lineLength = 3;

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
