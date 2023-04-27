import { Container, Sprite, Text } from '@pixi/react';
import { SYMBOL_SIZE, style } from '../consts';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useState } from 'react';
import { RootState } from '../store';
import { backout } from '../utils/utils';
import { tweenTo } from '../store/tweening';
import { loadControls } from '../loaders/loadControls';

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
  const [running, setRunning] = useState(false);
  const dispatch = useAppDispatch();
  const reels = useAppSelector((state: RootState) => state.symbolPosition);
  
  const startPlay = () => {
    console.log(reels)
    if (running) return;
    setRunning(true);
    reels.forEach((r, i) => {
      const extra = Math.floor(Math.random() * 3);
      const target = r.position + 10 + i * 5 + extra;
      const time = 2500 + i * 600 + extra * 600;
      setTimeout(() => setRunning(false), time);
      dispatch(
        tweenTo({
          object: r,
          property: 'position',
          target,
          time,
          onchange: null,
          // oncomplete: i === reels.length - 1 ? setRunning(false) : null,
        })
      );
    });
  };
  return (
    <Container width={width} height={200} y={yCoord}>
      {/* <Text text='play!' style={style} x={0} y={0} eventMode='dynamic' onpointerdown={startPlay} /> */}
      <Sprite
        image={loadControls[running ? 'spinButtonDisabled' : 'spinButton']}
        x={SYMBOL_SIZE * 2.85}
        cursor='pointer'
        eventMode='dynamic'
        onpointerdown={startPlay}
      />
    </Container>
  );
};

export default Footer;
