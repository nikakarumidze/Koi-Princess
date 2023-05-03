import { symbolPayoutValue } from '../consts';
import { combinations } from './betLines';
import { SymbolContainer, IcalculateWin } from '../types';
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
export const calculateTotalWin = (container: SymbolContainer[], level: number): IcalculateWin[] => {
  // console.log(new Date().getMilliseconds());
  const matrix = createMatrix(container);
console.log(matrix);
  const win = [];
  for (let i = 0; i < level * 2; i++) {
    const subArr = combinations[i](matrix);
    const subArrWin = calculateWin(subArr);
    if (!subArrWin) continue;
    win.push({
      combNumber: i,
      result: subArrWin,
    });
  }
  // console.log(new Date().getMilliseconds());
  return win;
};
