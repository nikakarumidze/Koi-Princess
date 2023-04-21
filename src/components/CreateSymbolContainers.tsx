import React from 'react';
import { BlurFilter } from 'pixi.js';
import { withFilters, Container, Sprite } from '@pixi/react';
import { IReel } from '../types';
import { defaultSlotArr, REEL_WIDTH, SYMBOL_SIZE } from '../consts';
import { randomTexture } from '../utils/utils';

export const reels: IReel[] = [];

const CreateSymbolContainers: React.FC = () => {
  const BlurContainer = withFilters(Container, { blur: BlurFilter });

  return (
    <>
      {defaultSlotArr.map((subArr, i) => {
        const container = (
          <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blur: 0 }}>
            {subArr.map((l, symbolIndex) => {
              const texture = randomTexture();
              return (
                <Sprite
                  key={symbolIndex}
                  texture={texture}
                  width={SYMBOL_SIZE}
                  height={SYMBOL_SIZE}
                  position={[
                    Math.round((SYMBOL_SIZE - texture.width) / 2),
                    symbolIndex * SYMBOL_SIZE,
                  ]}
                  scale={[Math.min(SYMBOL_SIZE / texture.width, SYMBOL_SIZE / texture.width)]}
                />
              );
            })}
          </BlurContainer>
        );
        reels.push({ container: container, prevPosition: 0 });
        return container;
      })}
    </>
  );
};

export default CreateSymbolContainers;
