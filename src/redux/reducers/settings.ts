import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CounterState {
  language: string;
}

const initialState: CounterState = {
  language: "en",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,

  reducers: {
    changeLocale: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { changeLocale } = settingsSlice.actions;

export const selectLocale = (state: RootState) => state.settings.language;

export default settingsSlice.reducer;
