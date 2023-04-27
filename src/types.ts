import { Resource, Texture } from 'pixi.js';

// type ITexture = PixiRef<typeof Texture>;
export interface IReel {
  container: JSX.Element;
  prevPosition: number;
}
export interface Symbol {
  index: number;
  texture: number;
  scale: number;
  x: number;
  y: number;
}
export interface SymbolContainer {
  symbols: Symbol[];
  blurY: number;
  position: number;
  previousPosition: number;
}
export interface ITween {
  object: any;
  property: string;
  propertyBeginValue: number;
  target: number;
  // easing: (t: number) => number;
  time: number;
  change?: any;
  complete?: any;
  start: number;
}
