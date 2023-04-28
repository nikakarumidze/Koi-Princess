import { Container } from '@pixi/react';
import Controllers from './controllers/Controllers';
import { SYMBOL_SIZE } from '../consts';

//     bottom.drawRect(
//       0,
//       SYMBOL_SIZE * 3 + (height - SYMBOL_SIZE * 3) / 2,
//       width,
//       (height - SYMBOL_SIZE * 3) / 2

interface IFooter {
  width: number;
  yCoord: number;
}
const Footer: React.FC<IFooter> = ({ width, yCoord }) => {
  return (
    <Container height={200} y={yCoord} x={(width - SYMBOL_SIZE * 4.7) / 2}>
      <Controllers />
    </Container>
  );
};

export default Footer;
