import React, { useMemo } from 'react';
import { BlurFilter } from 'pixi.js';
import { withFilters, Container, Sprite } from '@pixi/react';
import { REEL_WIDTH, SYMBOL_SIZE } from '../consts';
import { useAppSelector } from '../store/hooks';
import { RootState } from '../store';

const CreateContainers: React.FC = () => {
  const BlurContainer = useMemo(() => withFilters(Container, { blur: BlurFilter }), []);
  const symbolContainer = useAppSelector((state: RootState) => state.symbolPosition);
  return (
    <>
      {symbolContainer.map((subArr, i) => (
        <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blurX: 0, blurY: subArr.blurY }}>
          {subArr.symbols.map((symbol) => (
            <Sprite
              key={symbol.index}
              texture={symbol.texture}
              width={SYMBOL_SIZE}
              height={SYMBOL_SIZE}
              position={[symbol.x, symbol.y]}
              scale={symbol.scale}
            />
          ))}
        </BlurContainer>
      ))}
    </>
  );
};

export default CreateContainers;
