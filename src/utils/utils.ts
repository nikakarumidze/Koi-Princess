import { MatrixType, SymbolContainer } from '../types';

export const createMatrix = (container: SymbolContainer[]): MatrixType => {
  return container.map((subContainer) => {
    const symbols = [...subContainer.symbols].sort((a, b) => a.y - b.y);

    return symbols.map((symbol) => symbol.texture);
  });
};
