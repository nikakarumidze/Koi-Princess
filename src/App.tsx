import React, { ComponentProps, useState, useEffect } from 'react';
import * as PIXI from 'pixi.js';
import { useTick, Sprite, Stage, Container, withFilters } from '@pixi/react';
import { style, defaultSlotArr, height, width, REEL_WIDTH, SYMBOL_SIZE } from './consts';
import { randomTexture } from './utils/utils';
import Header from './components/Header';
import Footer from './components/Footer';
import { IReel } from './types';
import CreateSymbolContainers from './components/CreateSymbolContainers';


const App = (): JSX.Element => {
  const [symbolContainers, setSymbolContainers] = useState<JSX.Element[]>([]);
  // const [reels, setReels] = useState<IReel[]>([]);
  const [app, setApp] = useState<PIXI.Application>();
  const [running, setRunning] = useState(false);
  (globalThis as any).__PIXI_APP__ = app;

  return (
    <Stage onMount={setApp} width={width} height={height}>
      {app && (
        <>
          <Header width={width} />
          <Container anchor={[0.5]} y={(height - SYMBOL_SIZE * 3) / 2} scale={0.9}>
            <CreateSymbolContainers />
          </Container>
          <Footer width={width} yCoord={SYMBOL_SIZE * 3 + (height - SYMBOL_SIZE * 3) / 2} />
        </>
      )}
    </Stage>
  );
};

export default App;
