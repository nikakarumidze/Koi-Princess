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

export function levelOne(arr: MatrixType) {
  // Combination one
  const temp = [];
  arr.forEach((reel) => temp.push(reel[1]));
}

function levelTwo(arr: MatrixType) {
  // Combination one
  const temp = [];
  arr.forEach((reel) => temp.push(reel[0]));
}

function levelThree(arr: MatrixType) {
  // Combination one
  const temp = [];
  arr.forEach((reel) => temp.push(reel[2]));
}

function levelFour(arr: MatrixType) {
  // Combination one
  const temp = [];
  arr.forEach((reel, i) => temp.push(reel[i > 2 ? (reel.length - 1) % i : i]));
}
