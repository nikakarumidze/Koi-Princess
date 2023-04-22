import React, { useMemo } from 'react';
import { BlurFilter } from 'pixi.js';
import { withFilters, Container, Sprite } from '@pixi/react';
import { defaultSlotArr, REEL_WIDTH, SYMBOL_SIZE } from '../consts';
import { randomTexture } from '../utils/utils';

const CreateContainers: React.FC = () => {
  const BlurContainer = useMemo(() => withFilters(Container, { blur: BlurFilter }), []);
  return (
    <>
      {defaultSlotArr.map((subArr, i) => (
        <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blur: subArr.blur }}>
          {subArr.symbols.map((symbol) => {
            const texture = randomTexture();
            return (
              <Sprite
                key={symbol.index}
                texture={texture}
                width={SYMBOL_SIZE}
                height={SYMBOL_SIZE}
                position={[symbol.x, symbol.y]}
                scale={symbol.scale}
              />
            );
          })}
        </BlurContainer>
      ))}
    </>
  );
};

export default CreateContainers;
