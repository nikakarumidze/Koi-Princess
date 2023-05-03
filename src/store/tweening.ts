import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITween } from '../types';
import { lerp, easing } from '../utils/utils';

export const defaultTweening: ITween[] = [];
interface TweenPayload {
  object: any;
  target: number;
  time: number;
}

export const tweeningSlice = createSlice({
  name: 'tweening',
  initialState: defaultTweening,
  reducers: {
    tweenTo(state: ITween[], action: PayloadAction<TweenPayload>): void {
      const { object, target, time } = action.payload;
      state.push({
        object,
        propertyBeginValue: object.position,
        target,
        time,
        start: Date.now(),
      } as ITween);
    },
    tweeningTicker(state: ITween[]) {
      const now = Date.now();
      const remove: ITween[] = [];
      state.forEach((t) => {
        const phase = Math.min(1, (now - t.start) / t.time);
        t.object.position = lerp(t.propertyBeginValue, t.target, easing(phase));
        if (phase === 1) {
          t.object.position = t.target;
          remove.push(t);
        }
      });
      if (remove.length && remove.length === state.length) state.length = 0;
    },
  },
});

export const { tweenTo, tweeningTicker } = tweeningSlice.actions;
