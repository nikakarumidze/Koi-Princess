import { Container, Sprite, Text } from '@pixi/react';
import React, { useCallback, useState } from 'react';
import infoBar from '../../assets/controls/infoBar.png';
import { Sprite as PixiSprite } from 'pixi.js';

interface IScoreBar {
  text: string;
  value: number;
}

const ScoreBar: React.FC<IScoreBar> = ({ text, value }) => {
  const [dimentions, setDimentions] = useState([0, 0]);

  const infoBarPosition = useCallback((node: PixiSprite) => {
    if (node !== null) {
        console.log(node)
      setDimentions([node.width, node.height]);
    }
  }, []);
  console.log(dimentions);
  return (
    <Container>
      {/* <Text text={text} y={-dimentions[1]} /> */}
      <Container>
        <Sprite image={infoBar} ref={infoBarPosition} />
        <Text text={String(value)} anchor={0.5}/>
      </Container>
    </Container>
  );
};

export default ScoreBar;
