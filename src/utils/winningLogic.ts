import { symbolPayoutValue } from '../consts';
import { combinations } from './betLines';
import { SymbolContainer, IcalculateWin } from '../types';
import { createMatrix } from './utils';

// Calculates win on the single bet line
const calculateWin = (symbols: number[]): number => {
  const firstSymbol = symbols[0];
  let numberOfConsecutiveSymbols = 1;

  for (let i = 1; i < symbols.length; i++) {
    if (symbols[i] === firstSymbol || !symbols[i]) numberOfConsecutiveSymbols++;
    else break;
  }

  return 10 * symbolPayoutValue[firstSymbol][numberOfConsecutiveSymbols] ?? 0;
};

export const calculateTotalWin = (container: SymbolContainer[], level: number): IcalculateWin => {
  const matrix = createMatrix(container);

  const singleWins = [];
  let totalWin = 0;

  for (let i = 0; i < level * 2; i++) {
    const subArr = combinations[i](matrix);
    const subArrWin = calculateWin(subArr);

    if (!subArrWin) continue;

    totalWin += subArrWin;
    singleWins.push({
      combNumber: i,
      win: subArrWin,
    });
  }
  return {
    totalWin,
    singleWins,
  };
};
