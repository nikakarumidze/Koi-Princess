import { Container, Sprite, Text } from '@pixi/react';
import React, { useCallback, useState } from 'react';
import infoBar from '../../assets/controls/infoBar.png';
import { Sprite as PixiSprite, Text as PixiText } from 'pixi.js';

interface IScoreBar {
  text: string;
  value: number;
}

const ScoreBar: React.FC<IScoreBar> = ({ text, value }) => {
  const [imageDimentions, setImageDimentions] = useState([0, 0]);
  const [textDimentions, setTextDimentions] = useState([0, 0]);

  const infoBarPosition = useCallback((node: PixiSprite) => {
    if (node !== null) {
      setImageDimentions([node.width, node.height]);
    }
  }, []);
  const textPosition = useCallback((node: PixiText) => {
    if (node !== null) {
      setTextDimentions([node.width, node.height]);
    }
  }, []);
  console.log(textDimentions);
  console.log(imageDimentions);
  return (
    <Container>
      {/* <Text text={text} y={-dimentions[1]} /> */}
      <Container>
        <Sprite image={infoBar} ref={infoBarPosition} />
        <Text
          text={String(value)}
          x={imageDimentions[0] / 2 - textDimentions[0] / 2}
          y={imageDimentions[0] / 2 - textDimentions[1] / 2}
          ref={textPosition}
        />
      </Container>
    </Container>
  );
};

export default ScoreBar;
