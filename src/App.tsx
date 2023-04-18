import React, { ComponentProps, useState, useCallback } from 'react';
import * as PIXI from 'pixi.js';
import { Text, useTick, Graphics, Sprite, Stage, Container, withFilters } from '@pixi/react';
import { slotTextures, style, backout, lineCount, lineLength, defaultSlotArr } from './consts';

const REEL_WIDTH = 160;
const SYMBOL_SIZE = 150;
type Draw = ComponentProps<typeof Graphics>['draw'];

const App = (): JSX.Element => {
  const [app, setApp] = useState<any>();
  (globalThis as any).__PIXI_APP__ = app;

  const BlurContainer = withFilters(Container, {
    blur: PIXI.BlurFilter,
  });

  const slotSymbols = defaultSlotArr.map((subArr, i) => (
    <BlurContainer key={i} x={i * REEL_WIDTH} blur={{ blur: 0 }}>
      {subArr.map((l, symbolIndex) => {
        const symbol = (
          <Sprite
            key={symbolIndex}
            image='https://picsum.photos/200'
            // image={slotTextures[Math.floor(Math.random() * slotTextures.length)]}
            // position={[Math.round((SYMBOL_SIZE - symbol.width) / 2), symbolIndex * SYMBOL_SIZE]}
            // scale={[Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height)]}
          />
        );
        // symbol.props.x = 200;

        return symbol;
      })}
    </BlurContainer>
  ));

  const drawTop = useCallback(
    (top: PIXI.Graphics) => {
      top.beginFill(0, 1);
      top.drawRect(0, 0, app.screen.width, (app?.screen.height - SYMBOL_SIZE * 3) / 2);
      const text = new PIXI.Text('Spin!', style);
      text.position = { x: 10, y: 10 };
      text.anchor = 0.5 as any;
      top.addChild(text);
    },
    [app]
  );
  const drawBottom = useCallback(
    (bottom: PIXI.Graphics) => {
      bottom.beginFill(0, 1);
      bottom.drawRect(
        0,
        SYMBOL_SIZE * 3 + (app?.screen.height - SYMBOL_SIZE * 3) / 2,
        app?.screen.width,
        (app?.screen.height - SYMBOL_SIZE * 3) / 2
      );
      // const text = new PIXI.Text('Spin!', style);
      // text.position = { x: 10, y: 10 };
      // bottom.addChild(text);
    },
    [app]
  );

  return (
    <div>
      <Stage onMount={setApp}>
        {app && (
          <>
            <Container
              position={[
                Math.round(app.screen.width - REEL_WIDTH * 5),
                (app.screen.height - SYMBOL_SIZE * 3) / 2,
              ]}
            >
              {slotSymbols}
            </Container>
            <Graphics draw={drawTop} />
            <Graphics draw={drawBottom} />
          </>
        )}
      </Stage>
    </div>
  );
};

export default App;
