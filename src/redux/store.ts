import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import settingReducer from "./reducers/settings";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    settings: settingReducer,
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
