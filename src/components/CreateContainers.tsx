import React, { useMemo } from 'react';
import { BlurFilter } from 'pixi.js';
import { withFilters, Container, Sprite, useTick } from '@pixi/react';
import { REEL_WIDTH, SYMBOL_SIZE } from '../consts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store';
import { changePosition, symbolTicker } from '../store/symbolPosition';
import { tweeningTicker } from '../store/tweening';
import { slotTextures } from '../loaders/loadSymbols';
import column from '../assets/decorative/column-bg.png';

const CreateContainers: React.FC = () => {
  const BlurContainer = useMemo(() => withFilters(Container, { blur: BlurFilter }), []);
  const tweening = useAppSelector((state: RootState) => state.tweening);
  const dispatch = useAppDispatch();

  useTick((delta) => {
    dispatch(tweeningTicker());
    dispatch(changePosition(tweening));
    dispatch(symbolTicker());
  });

  const symbolContainer = useAppSelector((state: RootState) => state.symbolPosition);

  return (
    <Container scale={0.9}>
      {symbolContainer.map((subArr, i) => (
        <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blurX: 0, blurY: subArr.blurY }}>
          <Sprite image={column} scale={0.9} />
          {subArr.symbols.map((symbol) => (
            <Sprite
              key={symbol.index}
              zIndex={1}
              image={slotTextures[symbol.texture]}
              width={SYMBOL_SIZE}
              height={SYMBOL_SIZE}
              position={[symbol.x, symbol.y + 10]}
              scale={symbol.scale}
            />
          ))}
        </BlurContainer>
      ))}
    </Container>
  );
};

export default CreateContainers;
