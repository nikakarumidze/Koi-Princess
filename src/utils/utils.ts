import { MatrixType, SymbolContainer } from '../types';

// Creates matrix from redux state.
export const createMatrix = (container: SymbolContainer[]): MatrixType => {
  const arr: MatrixType = [];

  container.forEach((subContainer) => {
    const subArr: number[] = [];
    subContainer.symbols.forEach((symbol) => subArr.push(symbol.texture));
    arr.push(subArr);
  });
  return arr;
};

// Bet Lines
export const firstBetLine = new Set([4, 2, 8, 10, 13, 16]);
export const secondBetLine = new Set([1, 6, 7, 11, 15, 18, 19, 20]);
export const thirdBetLine = new Set([3, 5, 9, 12, 14, 17]);
