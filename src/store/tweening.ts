import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITween } from '../types';
import { lerp } from '../utils/utils';

export const defaultTweening: ITween[] = [];
interface TweenPayload {
  object: any;
  property: string;
  target: number;
  time: number;
  easing: (t: number) => number;
  onchange?: any;
  oncomplete?: any;
}

export const tweeningSlice = createSlice({
  name: 'tweening',
  initialState: defaultTweening,
  reducers: {
    tweenTo(state: ITween[], action: PayloadAction<TweenPayload>): void {
      const { object, property, target, time, easing, onchange, oncomplete } = action.payload;
      const tween: ITween = {
        object,
        property,
        propertyBeginValue: object[property],
        target,
        easing,
        time,
        change: onchange,
        complete: oncomplete,
        start: Date.now(),
      };

      state.push(tween);
    },
    tweeningTicker(state: ITween[]) { // Is called upon useTick
      const now = Date.now();
      const remove: ITween[] = [];
      state.forEach((t) => {
        const phase = Math.min(1, (now - t.start) / t.time);
        t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
        if (t.change) t.change(t);
        if (phase === 1) {
          t.object[t.property] = t.target;
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