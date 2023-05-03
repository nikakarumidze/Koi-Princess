import React, { useMemo, useEffect, useRef, useState } from 'react';
import { BlurFilter, Graphics as PixiGraphics } from 'pixi.js';
import { withFilters, Container, Sprite, useTick, Graphics, Text } from '@pixi/react';
import { REEL_WIDTH, displayWinStyle } from '../consts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store';
import { changePosition, symbolTicker } from '../store/symbolPosition';
import { tweeningTicker } from '../store/tweening';
import { slotTextures } from '../loaders/loadSymbols';
import column from '../assets/decorative/column-bg.png';
import { columnMask } from '../utils/utils';

const CreateContainers: React.FC = () => {
  const [textScale, setTextScale] = useState(0);
  const maskRef = useRef<PixiGraphics>(null);

  const BlurContainer = useMemo(() => withFilters(Container, { blur: BlurFilter }), []);

  const tweening = useAppSelector((state: RootState) => state.tweening);
  const displayWin = useAppSelector((state: RootState) => state.displayWin);
  const symbolContainer = useAppSelector((state: RootState) => state.symbolPosition);
  const dispatch = useAppDispatch();

  useTick((delta) => {
    dispatch(symbolTicker());
    dispatch(tweeningTicker());
    dispatch(changePosition(tweening));
    if (!displayWin.totalWin) {
      if (textScale) setTextScale(0);
      return;
    } else {
      if (textScale >= 1) return;
      setTextScale((prevState) => prevState + 0.025);
    }
  });

  // useEffect(() => {
  //   console.log(textScale);
  //   if (!displayWin.totalWin) {
  //     if (textScale) setTextScale(0);
  //     return;
  //   }
  //   if (textScale >= 1) return;
  //   setTextScale((prevState) => prevState + 0.02);
  // }, [textScale, displayWin.totalWin]);

  return (
    <>
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
        scale={textScale}
      />
    </>
  );
};

export default CreateContainers;
