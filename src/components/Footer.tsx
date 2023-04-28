import { Container } from '@pixi/react';
import Controllers from './controllers/Controllers';

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
    <Container width={width} height={200} y={yCoord}>
      <Controllers />
    </Container>
  );
};

export default Footer;
