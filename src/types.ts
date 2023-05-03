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
  propertyBeginValue: number;
  target: number;
  time: number;
  start: number;
}

export type MatrixType = number[][];

export interface IcalculateWin {
  totalWin: number;
  singleWins: {
    win: number;
    combNumber: number;
  }[];
}
