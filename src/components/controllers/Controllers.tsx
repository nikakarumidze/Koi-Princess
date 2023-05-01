import React, { useCallback } from 'react';
import { loadControls } from '../../loaders/loadControls';
import { Sprite } from '@pixi/react';
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
} from '../../store/gameSettings';

const Controllers = () => {
  const dispatch = useAppDispatch();
  const reels = useAppSelector((state: RootState) => state.symbolPosition);
  const tweening = useAppSelector((state: RootState) => state.tweening);
  const gameSettings = useAppSelector((state: RootState) => state.gameSettings);

  const startPlay = useCallback(() => {
    // If tweening is in the process return
    if (tweening.length) return;
    reels.forEach((r, i) => {
      const extra = Math.floor(Math.random() * 3);
      const target = r.position + 10 + i * 5 + extra;
      const time = 2500 + i * 600 + extra * 600;
      dispatch(
        tweenTo({
          object: r,
          // property: 'position',
          target,
          time,
        })
      );
    });
  }, [tweening.length, dispatch, reels]);

  const playWithInterval = () => {
    startPlay();
    const intervalTime = 7200;
    const executeNum = 5;
    const interval = setInterval(() => startPlay(), intervalTime);
    setTimeout(() => clearInterval(interval), intervalTime * executeNum);
  };

  return (
    <>
      {/* <ScoreBar text='BET' value={gameSettings.bet} /> */}
      <ButtonedScoreBar
        text='LEVEL'
        value={gameSettings.level}
        minValue={0}
        maxValue={10}
        x={25}
        onIncrease={() => dispatch(increaseLevel())}
        onDecrease={() => dispatch(decreaseLevel())}
      />
      <TextedButton isDisabled={false} x={150} text='AUTO PLAY' onClick={playWithInterval} />
      <Sprite
        image={loadControls[tweening.length ? 'spinButtonDisabled' : 'spinButton']}
        x={SYMBOL_SIZE * 2.5}
        anchor={[0.5, 0]}
        cursor='pointer'
        eventMode='dynamic'
        onpointerdown={startPlay}
      />
      <TextedButton
        isDisabled={gameSettings.level === 10 && gameSettings.coinValue === '1.00'}
        x={450}
        text='MAX BET'
        onClick={() => dispatch(maxBet())}
      />
      <ButtonedScoreBar
        text='COIN VALUE'
        value={gameSettings.coinValue}
        minValue='0.01'
        maxValue='1.00'
        x={650}
        onIncrease={() => dispatch(increaseCoins())}
        onDecrease={() => dispatch(decreaseCoins())}
      />
      {/* <ScoreBar text='COINS' value={gameSettings.coins} x={600} /> */}
    </>
  );
};

export default Controllers;
