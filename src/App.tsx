import React, { useState } from 'react';
import * as PIXI from 'pixi.js';
import { useTick, Container } from '@pixi/react';
import { height, width, SYMBOL_SIZE } from './consts';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateContainers from './components/CreateContainers';
import { Stage } from './ContextBridge';

const App = (): JSX.Element => {
  const [app, setApp] = useState<PIXI.Application>();
  (globalThis as any).__PIXI_APP__ = app;

  return (
    <Stage onMount={setApp} width={width} height={height}>
      <Header width={width} />
      <Container anchor={[0.5]} y={(height - SYMBOL_SIZE * 3) / 2} scale={0.9}>
        <CreateContainers />
      </Container>
      <Footer width={width} yCoord={SYMBOL_SIZE * 3 + (height - SYMBOL_SIZE * 3) / 2} />
    </Stage>
  );
};

export default App;
