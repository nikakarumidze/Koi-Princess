import { MatrixType, SymbolContainer } from '../types';

export const createMatrix = (container: SymbolContainer[]): MatrixType => {
  const arr: MatrixType = [];

  container.forEach((subContainer) => {
    const subArr: number[] = [];
    subContainer.symbols.forEach((symbol) => subArr.push(symbol.texture));
    arr.push(subArr);
  });
  return arr;
};

