import React, { useEffect, useState } from 'react';
import { Application } from 'pixi.js';
import { Container, Sprite } from '@pixi/react';
import { height, width, SYMBOL_SIZE } from './consts';
import Header from './components/Header';
import { Stage } from './ContextBridge';
import background from './assets/decorative/game-bg.jpg';
import MiddleArea from './components/MiddleArea';
import Controllers from './components/controllers/Controllers';

const App = (): JSX.Element => {
  const [app, setApp] = useState<Application>();
  const [size, setSize] = useState([0, 0]);
  (globalThis as any).__PIXI_APP__ = app;

  useEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <Stage onMount={setApp} width={size[0]} height={size[1]}>
      <Sprite image={background} width={size[0]} height={size[1]} />
      <Container scale={[size[0] / width, size[1] / height]}>
        <MiddleArea width={width} height={height} />
        <Header width={width} />
        <Controllers y={25 + SYMBOL_SIZE * 1.5 + height / 2} />
      </Container>
    </Stage>
  );
};

export default App;
