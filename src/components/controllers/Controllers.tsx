import React, { useState, useEffect, useMemo } from 'react';
import { loadControls } from '../../loaders/loadControls';
import { Container, Sprite } from '@pixi/react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { RootState } from '../../store';
import { tweenTo } from '../../store/tweening';
import TextedButton from './TextedButton';
import { SYMBOL_SIZE } from '../../consts';
import ButtonedScoreBar from './ButtonedScoreBar';
import {
  decreaseLevel,
  increaseLevel,
  increaseCoins,
  decreaseCoins,
  maxBet,
  hitPlay,
} from '../../store/gameSettings';
import ScoreBar from './ScoreBar';
import { calculateTotalWin } from '../../utils/winningLogic';

interface IControllers {
  y: number;
}

const Controllers: React.FC<IControllers> = ({ y }) => {
  const [loading, setLoading] = useState(false);
  const [level, setLevel] = useState(1);
  
  const dispatch = useAppDispatch();
  const reels = useAppSelector((state: RootState) => state.symbolPosition);
  const tweening = useAppSelector((state: RootState) => state.tweening);
  const gameSettings = useAppSelector((state: RootState) => state.gameSettings);

  useEffect(() => {
    if (!tweening.length && loading) {
      setLoading(false);
      console.log(calculateTotalWin(reels, level))
    } else if (tweening.length && !loading) setLoading(true);
  }, [tweening, loading, level, reels]);

  const startPlay = () => {
    // If tweening is in the process just return
    if (loading || gameSettings.coins < gameSettings.bet) return;
    dispatch(hitPlay());
    setLevel(gameSettings.level);
    reels.forEach((r, i) => {
      const extra = Math.floor(Math.random() * 3);
      const target = r.position + 10 + i * 5 + extra;
      const time = 2500 + i * 600 + extra * 600;
      dispatch(tweenTo({ object: r, target, time }));
    });
  };

  const playWithInterval = () => {
    startPlay();
    const intervalTime = 7200;
    const executeTimes = 5;
    const interval = setInterval(() => startPlay(), intervalTime);
    setTimeout(() => clearInterval(interval), intervalTime * executeTimes);
  };

  return (
    <Container y={y} x={SYMBOL_SIZE * 2.05} width={SYMBOL_SIZE * 6} scale={0.8}>
      <ScoreBar text='BET' value={gameSettings.bet} />
      <ButtonedScoreBar
        text='LEVEL'
        value={gameSettings.level}
        minValue={0}
        maxValue={10}
        x={150}
        onIncrease={() => dispatch(increaseLevel())}
        onDecrease={() => dispatch(decreaseLevel())}
      />
      <TextedButton isDisabled={false} x={280} text='AUTO PLAY' onClick={playWithInterval} />
      <Sprite
        image={loadControls[tweening.length ? 'spinButtonDisabled' : 'spinButton']}
        x={280 + (550 - 280 + 131 - 88) / 2} // w-88
        anchor={[0, 0.2]}
        cursor='pointer'
        eventMode='dynamic'
        onpointerdown={startPlay}
      />
      <TextedButton
        isDisabled={gameSettings.level === 10}
        x={550} // w-131
        text='MAX BET'
        onClick={() => dispatch(maxBet())}
      />
      <ButtonedScoreBar
        text='COIN VALUE'
        value={gameSettings.coinValue}
        minValue='0.01'
        maxValue='1.00'
        x={700}
        onIncrease={() => dispatch(increaseCoins())}
        onDecrease={() => dispatch(decreaseCoins())}
      />
      <ScoreBar text='COINS' value={gameSettings.coins} x={SYMBOL_SIZE * 5.5} />
    </Container>
  );
};

export default Controllers;
