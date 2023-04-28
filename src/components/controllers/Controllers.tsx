import React from 'react';
import { loadControls } from '../../loaders/loadControls';
import { Sprite } from '@pixi/react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import { RootState } from '../../store';
import { tweenTo } from '../../store/tweening';
import ScoreBar from './ScoreBar';

const Controllers = () => {
  const dispatch = useAppDispatch();
  const reels = useAppSelector((state: RootState) => state.symbolPosition);
  const tweening = useAppSelector((state: RootState) => state.tweening);
  const gameSettings = useAppSelector((state: RootState) => state.gameSettings);

  const startPlay = () => {
    // If tweening is in the process return
    if (tweening.length) return;
    reels.forEach((r, i) => {
      const extra = Math.floor(Math.random() * 3);
      const target = r.position + 10 + i * 5 + extra;
      const time = 2500 + i * 600 + extra * 600;
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
    <>
      <ScoreBar text='BET' value={gameSettings.bet} />
      <Sprite
        image={loadControls[tweening.length ? 'spinButtonDisabled' : 'spinButton']}
        x={100 * 2.85}
        cursor='pointer'
        eventMode='dynamic'
        onpointerdown={startPlay}
      />
    </>
  );
};

export default Controllers;
