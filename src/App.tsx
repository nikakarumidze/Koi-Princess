import React, { ComponentProps, useState, useCallback } from 'react';
import * as PIXI from 'pixi.js';
import { Text, useTick, Graphics, Sprite, Stage, Container, withFilters } from '@pixi/react';
import { slotTextures, style, randomTexture, defaultSlotArr, height, width } from './consts';

const REEL_WIDTH = 160;
const SYMBOL_SIZE = 150;

const App = (): JSX.Element => {
  const [app, setApp] = useState<PIXI.Application>();
  const [running, setRunning] = useState(false);
  (globalThis as any).__PIXI_APP__ = app;

  const BlurContainer = withFilters(Container, {
    blur: PIXI.BlurFilter,
  });

  const slotSymbols = defaultSlotArr.map((subArr, i) => (
    <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blur: 0 }}>
      {subArr.map((l, symbolIndex) => {
        const texture = randomTexture();
        return (
          <Sprite
            key={symbolIndex}
            texture={texture}
            position={[Math.round((SYMBOL_SIZE - texture.width) / 2), symbolIndex * SYMBOL_SIZE]}
            scale={[Math.min(SYMBOL_SIZE / texture.width, SYMBOL_SIZE / texture.width)]}
          />
        );
      })}
    </BlurContainer>
  ));

  const drawTop = useCallback((top: PIXI.Graphics) => {
    top.beginFill(0, 1);
    top.drawRect(0, 0, width, (height - SYMBOL_SIZE * 3) / 2);
    const text = new PIXI.Text('Spin!', style);
    text.position = { x: top.width / 2, y: top.height / 2 };
    top.addChild(text);
  }, []);
  const drawBottom = useCallback((bottom: PIXI.Graphics) => {
    bottom.beginFill(0, 1);
    bottom.drawRect(
      0,
      SYMBOL_SIZE * 3 + (height - SYMBOL_SIZE * 3) / 2,
      width,
      (height - SYMBOL_SIZE * 3) / 2
    );
    // const text = new PIXI.Text('Spin!', style);
    // text.position = { x: 10, y: 10 };
    // bottom.addChild(text);
  }, []);
  console.log(Math.round((width - REEL_WIDTH * 5) / 2));
  return (
    <Stage onMount={setApp} width={width} height={height}>
      {app && (
        <>
          <Graphics draw={drawTop} />
          <Container position={[Math.round(width / 6), (height - SYMBOL_SIZE * 3) / 2]}>
            {slotSymbols}
          </Container>
          <Graphics draw={drawBottom} />
        </>
      )}
    </Stage>
  );
};

export default App;
