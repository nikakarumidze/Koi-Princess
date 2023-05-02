import { symbolPayoutValue } from '../consts';
import { combinations } from './winningLines';
import { SymbolContainer } from '../types';
import { createMatrix } from './utils';

// Calculates win on bet line
const calculateWin = (array: number[]): number => {
  let start = array[0];
  let count = 1;

  for (let i = 1; i < array.length; i++) {
    if (array[i] === start || !array[i]) count++;
    else break;
  }
  const result = symbolPayoutValue[String(start)][count];
  return result === undefined ? 0 : result;
};

// Calculates total win
export const calculateTotalWin = (container: SymbolContainer[], level: number): number => {
  const matrix = createMatrix(container);

  let win = 0;
  for (let i = 0; i < level * 2; i++) {
    const subArr = combinations[i](matrix);
    const subArrWin = calculateWin(subArr);
     win += subArrWin;
  }
  console.log(win)
  return win;
};
