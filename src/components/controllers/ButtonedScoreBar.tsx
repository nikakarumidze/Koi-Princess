import { Container, Sprite, Text } from '@pixi/react';
import { loadControls } from '../../loaders/loadControls';
import React, { useCallback, useState } from 'react';
import { Text as PixiText } from 'pixi.js';
import { headerStyle, style } from '../../consts';

interface IButtonedScoreBar {
  text: string;
  value: number | string;
  minValue: number | string;
  maxValue: number | string;
  x: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const ButtonedScoreBar: React.FC<IButtonedScoreBar> = ({
  text,
  value,
  minValue,
  maxValue,
  x,
  onIncrease,
  onDecrease,
}) => {
  const [barDimentions, setBarDimentions] = useState([0, 0]);

  const centerText = useCallback((node: PixiText) => {
    if (node !== null) {
      node.x = node.parent.width / 2;
      node.y = node.parent.height / 2;
      setBarDimentions([node.parent.width, node.parent.height]);
    }
  }, []);

  return (
    <Container x={x} sortableChildren={true}>
      <Text text={text} style={headerStyle} anchor={0.5} x={barDimentions[0] / 2} />
      <Sprite image={loadControls.infoBarWide} y={barDimentions[1] / 3} zIndex={0}>
        <Text text={String(value)} anchor={0.5} style={style} ref={centerText} zIndex={999}/>
        <Sprite
          image={value === minValue ? loadControls.leftButtonDisabled : loadControls.leftButton}
          cursor='pointer'
          eventMode='dynamic'
          height={barDimentions[1] * 0.75}
          x={barDimentions[0] * 0.04}
          y={barDimentions[1] * 0.125}
          onpointerdown={onDecrease}
        />
        <Sprite
          image={value === maxValue ? loadControls.rightButtonDisabled : loadControls.rightButton}
          cursor='pointer'
          eventMode='dynamic'
          anchor={[1, 0]}
          x={barDimentions[0] * 0.96}
          y={barDimentions[1] * 0.125}
          height={barDimentions[1] * 0.75}
          onpointerdown={onIncrease}
        />
      </Sprite>
    </Container>
  );
};

export default ButtonedScoreBar;
