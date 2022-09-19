import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import gridReducer from "./reducers/gridReducer/gridReducer";

export const store = configureStore({
  reducer: {
    grid: gridReducer
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
