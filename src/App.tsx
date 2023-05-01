import React, { useState } from 'react';
import { Application } from 'pixi.js';
import { Container, Sprite } from '@pixi/react';
import { height, width, SYMBOL_SIZE, userHeight, userWidth } from './consts';
import Header from './components/Header';
import { Stage } from './ContextBridge';
import background from './assets/decorative/game-bg.jpg';
import MiddleArea from './components/MiddleArea';
import Controllers from './components/controllers/Controllers';

const App = (): JSX.Element => {
  const [app, setApp] = useState<Application>();
  (globalThis as any).__PIXI_APP__ = app;

  return (
    <Stage onMount={setApp} width={userWidth} height={userHeight}>
      <Container scale={[userWidth / width, userHeight / height]}>
        <Sprite image={background} width={width} height={height} />
        <MiddleArea width={width} height={height} />
        <Header width={width} />
        <Controllers y={25 + SYMBOL_SIZE * 1.5 + height / 2} />
      </Container>
    </Stage>
  );
};

export default App;
