import React from 'react';
import CreateContainers from './CreateContainers';
import { SYMBOL_SIZE } from '../consts';
import { Sprite, Container } from '@pixi/react';
import { loadDecorative } from '../loaders/loadDecorations';

interface IMiddleArea {
  width: number;
  height: number;
}

const MiddleArea: React.FC<IMiddleArea> = ({ width, height }) => {
  return (
    <>
      <Sprite image={loadDecorative.princess} scale={0.35} x={SYMBOL_SIZE / 2} y={80} />
      <Sprite
        image={loadDecorative.border}
        x={(width - SYMBOL_SIZE * 4.52) / 2}
        anchor={[1, 0]}
        y={80}
        scale={0.8}
      />
      <Container x={(width - SYMBOL_SIZE * 4.7) / 2} y={(height - SYMBOL_SIZE * 3) / 2} scale={0.9}>
        <CreateContainers />
      </Container>
      <Sprite
        image={loadDecorative.border}
        x={width - 1.7 * SYMBOL_SIZE}
        y={80}
        scale={[-0.8, 0.8]} // Mirroring Original Sprite
      />
    </>
  );
};

export default MiddleArea;
