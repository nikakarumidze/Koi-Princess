import { Container, Text } from '@pixi/react';
import { style } from '../consts';

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
    </Container>
  );
};

export default Header;
