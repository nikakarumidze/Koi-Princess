import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITween } from '../types';

export const defaultTweening: ITween[] = [];
interface TweenPayload {
  object: any;
  // property: string;
  target: number;
  time: number;
  // easing: (t: number) => number;
  onchange?: any;
  oncomplete?: any;
}

export const tweeningSlice = createSlice({
  name: 'tweening',
  initialState: defaultTweening,
  reducers: {
    tweenTo(state: ITween[], action: PayloadAction<TweenPayload>): void {
      const { object, target, time, onchange, oncomplete } = action.payload;

      const tween: ITween = {
        object,
        // property,
        propertyBeginValue: object.position,
        target,
        // easing,
        time,
        change: onchange,
        complete: oncomplete,
        start: Date.now(),
      };

      state.push(tween);
    },
    tweeningTicker(state: ITween[]) {
      // Is called upon useTick
      const now = Date.now();
      const remove: ITween[] = [];
      const easing = (t: number) => --t * t * (1.4 * t + 0.4) + 1;
      const lerp = (a1: number, a2: number, t: number): number => a1 * (1 - t) + a2 * t;

      state.forEach((t) => {
        const phase = Math.min(1, (now - t.start) / t.time);

        t.object.position = lerp(t.propertyBeginValue, t.target, easing(phase));
        // Had to move lerp and easing function logic here, because of redux.

        if (t.change) t.change(t);
        if (phase === 1) {
          t.object.position = t.target;
          if (t.complete) t.complete(t);
          remove.push(t);
        }
      });
      remove.forEach((item) => {
        state.splice(state.indexOf(item), 1);
      });
    },
  },
});

export const { tweenTo, tweeningTicker } = tweeningSlice.actions;
