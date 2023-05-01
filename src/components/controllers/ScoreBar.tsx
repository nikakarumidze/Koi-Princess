import { Container, Sprite, Text } from '@pixi/react';
import React, { useCallback, useState } from 'react';
import infoBar from '../../assets/controls/infoBar.png';
import { Text as PixiText } from 'pixi.js';
import { headerStyle, style } from '../../consts';

interface IScoreBar {
  text: string;
  value: number;
  x?: number;
}

const ScoreBar: React.FC<IScoreBar> = ({ text, value, x }) => {
  const [barDimentions, setBarDimentions] = useState([0, 0]);

  const centerText = useCallback((node: PixiText) => {
    if (node !== null) {
      node.x = node.parent.width / 2;
      node.y = node.parent.height / 2;
      setBarDimentions([node.parent.width, node.parent.height]);
    }
  }, []);
  return (
    <Container x={x}>
      <Text text={text} style={headerStyle} anchor={0.5} x={barDimentions[0] / 2} />
      <Sprite image={infoBar} y={barDimentions[1] / 3}>
        <Text text={String(Math.round(value))} anchor={0.5} ref={centerText} style={style} />
      </Sprite>
    </Container>
  );
};

export default ScoreBar;
