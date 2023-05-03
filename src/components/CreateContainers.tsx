import React, { useMemo, useCallback, useRef } from 'react';
import { BlurFilter, Graphics as PixiGraphics } from 'pixi.js';
import { withFilters, Container, Sprite, useTick, Graphics, Text } from '@pixi/react';
import { REEL_WIDTH, displayWinStyle } from '../consts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store';
import { changePosition, symbolTicker } from '../store/symbolPosition';
import { tweeningTicker } from '../store/tweening';
import { slotTextures } from '../loaders/loadSymbols';
import column from '../assets/decorative/column-bg.png';

const CreateContainers: React.FC = () => {
  const maskRef = useRef<PixiGraphics>(null);
  const BlurContainer = useMemo(() => withFilters(Container, { blur: BlurFilter }), []);
  const tweening = useAppSelector((state: RootState) => state.tweening);
  const displayWin = useAppSelector((state: RootState) => state.displayWin);
  const dispatch = useAppDispatch();

  const columnMask = useCallback((g: PixiGraphics) => {
    g.beginFill();
    g.drawRect(0, 0, REEL_WIDTH * 5, REEL_WIDTH * 3);
    g.endFill();
  }, []);

  useTick((delta) => {
    dispatch(symbolTicker());
    dispatch(tweeningTicker());
    dispatch(changePosition(tweening));
  });

  const symbolContainer = useAppSelector((state: RootState) => state.symbolPosition);

  return (
    <Container scale={0.9}>
      <Graphics draw={columnMask} ref={maskRef} mask={maskRef.current} />
      {symbolContainer.map((subArr, i) => (
        <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blurX: 0, blurY: subArr.blurY }}>
          <Sprite image={column} scale={0.9}>
            {subArr.symbols.map((symbol) => (
              <Sprite
                key={symbol.index}
                image={slotTextures[symbol.texture]}
                position={[symbol.x, symbol.y]}
                scale={symbol.scale / 0.9}
                mask={maskRef.current}
              />
            ))}
          </Sprite>
        </BlurContainer>
      ))}
      <Text
        text={String(displayWin.totalWin)}
        style={displayWinStyle}
        x={REEL_WIDTH * 2.5}
        y={REEL_WIDTH * 1.5}
        anchor={0.5}
      />
    </Container>
  );
};

export default CreateContainers;
