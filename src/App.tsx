import React, { useState } from 'react';
import * as PIXI from 'pixi.js';
import { useTick, Container } from '@pixi/react';
import { height, width, SYMBOL_SIZE } from './consts';
import Header from './components/Header';
import Footer from './components/Footer';
import CreateContainers from './components/CreateContainers';
import { Stage } from './ContextBridge';
import { useDispatch } from 'react-redux';
import { symbolTicker } from './store/symbolPosition';
import { tweeningTicker } from './store/tweening';

const App = (): JSX.Element => {
  const [app, setApp] = useState<PIXI.Application>();
  const dispatch = useDispatch();
  useTick((delta) => {
    dispatch(symbolTicker());
    dispatch(tweeningTicker());
  });
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
