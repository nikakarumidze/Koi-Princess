export interface IReel {
  container: JSX.Element;
  prevPosition: number;
}
export interface Symbol {
  index: number;
  scale: number;
  x: number;
  y: number;
}

export interface SymbolContainer {
  symbols: Symbol[];
  blur: number;
  position: number;
  previousPosition: number;
}
