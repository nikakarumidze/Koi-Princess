import { Container, Text } from '@pixi/react';
import { style } from '../consts';
import { useAppDispatch } from '../store/hooks';
import { symbolTicker } from '../store/symbolPosition';

// const drawBottom = useCallback((bottom: PIXI.Graphics) => {
//     bottom.beginFill(0, 1);
//     bottom.drawRect(
//       0,
//       SYMBOL_SIZE * 3 + (height - SYMBOL_SIZE * 3) / 2,
//       width,
//       (height - SYMBOL_SIZE * 3) / 2
//     );
//     return bottom;
//   }, []);
interface IFooter {
  width: number;
  yCoord: number;
}
const Footer: React.FC<IFooter> = ({ width, yCoord }) => {
  const dispatch = useAppDispatch();
  return (
    <Container width={width} height={200} y={yCoord}>
      <Text
        text='play!'
        style={style}
        x={0}
        y={0}
        eventMode='dynamic'
        click={() => dispatch(symbolTicker())}
      />
    </Container>
  );
};

export default Footer;
