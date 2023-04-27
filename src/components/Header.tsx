import { Container, Sprite, Text } from '@pixi/react';
import { SYMBOL_SIZE, style } from '../consts';
import { loadDecorative } from '../loaders/loadDecorations';

interface IHeader {
  width: number;
}
// const drawTop = useCallback((top: PIXI.Graphics) => {
//   top.beginFill(0, 1);
//   top.drawRect(0, 0, width, (height - SYMBOL_SIZE * 3) / 2);
//   const text = new PIXI.Text('Spin!', style);
//   text.position = { x: top.width / 2, y: top.height / 2 };
//   top.addChild(text);
// }, []);
const Header: React.FC<IHeader> = ({ width }) => {
  return (
    <Container width={width} height={200}>
      <Text text='play!' style={style}></Text>
      <Sprite
        image={loadDecorative.topLogo}
        width={SYMBOL_SIZE * 5}
        height={150}
        x={width / 2}
        y={55}
      />
    </Container>
  );
};

export default Header;
