import { Container, Sprite } from '@pixi/react';
import { loadDecorative } from '../loaders/loadDecorations';

interface IHeader {
  width: number;
}
const Header: React.FC<IHeader> = ({ width }) => {
  return (
    <Container width={width} height={200}>
      <Sprite
        image={loadDecorative.topLogo}
        width={width * 0.7}
        height={150}
        x={(width - width * 0.7) / 2}
        scale={0.7}
      />
    </Container>
  );
};

export default Header;
