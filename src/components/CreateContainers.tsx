import React, { useMemo,useEffect } from 'react';
import { BlurFilter } from 'pixi.js';
import { withFilters, Container, Sprite, useTick } from '@pixi/react';
import { REEL_WIDTH, SYMBOL_SIZE } from '../consts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { RootState } from '../store';
import { changePosition, symbolTicker } from '../store/symbolPosition';
import { tweeningTicker } from '../store/tweening';
import { slotTextures } from '../loaders/loadSymbols';

const CreateContainers: React.FC = () => {
  const BlurContainer = useMemo(() => withFilters(Container, { blur: BlurFilter }), []);
  const tweening = useAppSelector((state: RootState) => state.tweening);
  // const memoizedReels = useMemo(() => reels,[])
  const dispatch = useAppDispatch();
  useTick((delta) => {
    dispatch(tweeningTicker());
    dispatch(changePosition(tweening))
    dispatch(symbolTicker());
    console.log(tweening)
    // console.log(reels)
  });

  // useEffect(() => {
  //   first
  
    
  // }, [reels])
  
  const symbolContainer = useAppSelector((state: RootState) => state.symbolPosition);
  
  return (
    <>
      {symbolContainer.map((subArr, i) => (
        <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blurX: 0, blurY: subArr.blurY }}>
          {subArr.symbols.map((symbol) => (
            <Sprite
              key={symbol.index}
              image={slotTextures[symbol.texture]}
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
