import { Sprite, Text } from '@pixi/react';
import React, { useCallback } from 'react';
import { loadControls } from '../../loaders/loadControls';
import { Text as PixiText } from 'pixi.js';
import { style } from '../../consts';

interface ITextedButton {
  text: string;
  isDisabled: boolean;
  x: number;
  onClick: () => void;
}

const TextedButton: React.FC<ITextedButton> = ({ text, isDisabled, x, onClick }) => {
  const centerText = useCallback((node: PixiText) => {
    if (node !== null) {
      node.texture.once('update', () => {
        node.x = node.parent.width / 2;
        node.y = node.parent.height / 2;
      });
    }
  }, []);
  return (
    <Sprite
      image={isDisabled ? loadControls.buttonDisabled : loadControls.button}
      x={x}
      cursor='pointer'
      eventMode='dynamic'
      onpointerdown={onClick}
    >
      <Text text={text} ref={centerText} anchor={0.5} style={style} />
    </Sprite>
  );
};

export default TextedButton;
