import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { gameSettingsSlice } from './gameSettings';
import { symbolContainerSlice } from './symbolPosition';
import { tweeningSlice } from './tweening';
import { displayWinSlice } from './displayWin';

export const store = configureStore({
  reducer: {
    gameSettings: gameSettingsSlice.reducer,
    symbolPosition: symbolContainerSlice.reducer,
    tweening: tweeningSlice.reducer,
    displayWin: displayWinSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
