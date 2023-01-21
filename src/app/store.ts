import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import dropdownReducer from '../containers/dropdownSlice'

export const store = configureStore({
  reducer: {
    languages: dropdownReducer,
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
