import React, { useState } from 'react';
import { Application } from 'pixi.js';
import { Container, Sprite } from '@pixi/react';
import { height, width, SYMBOL_SIZE, userHeight, userWidth } from './consts';
import Header from './components/Header';
import { Stage } from './ContextBridge';
import background from './assets/decorative/game-bg.jpg';
import MiddleArea from './components/MiddleArea';
import Footer from './components/Footer';

const App = (): JSX.Element => {
  const [app, setApp] = useState<Application>();
  (globalThis as any).__PIXI_APP__ = app;

  console.log(width, height);

  return (
    <Stage onMount={setApp} width={userWidth} height={userHeight}>
      <Container scale={[userWidth / width, userHeight / height]}>
        <Sprite image={background} width={width} height={height} />
        <MiddleArea width={width} height={height} />
        <Header width={width} />
        <Footer width={width} yCoord={SYMBOL_SIZE * 3 + (height - SYMBOL_SIZE * 3) / 2} />
      </Container>
    </Stage>
  );
};

export default App;
