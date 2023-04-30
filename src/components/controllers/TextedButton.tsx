import { Container, Sprite, Text } from '@pixi/react';
import React, { useCallback } from 'react';
import { loadControls } from '../../loaders/loadControls';
import { Text as PixiText } from 'pixi.js';
import { style } from '../../consts';

interface ITextedButton {
  text: string;
  isDisabled: boolean;
  x: number;
}

const TextedButton: React.FC<ITextedButton> = ({ text, isDisabled, x }) => {
  const centerText = useCallback((node: PixiText) => {
    if (node !== null) {
      node.x = node.parent.width / 2;
      node.y = node.parent.height / 2;
    }
  }, []);
  return (
    <Container>
      <Sprite
        image={isDisabled ? loadControls.buttonDisabled : loadControls.button}
        x={x}
        cursor='pointer'
        eventMode='dynamic'
      >
        <Text text={text} ref={centerText} anchor={0.5} style={style} />
      </Sprite>
    </Container>
  );
};

export default TextedButton;
