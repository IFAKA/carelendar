import { EmptyIndexMonthState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const monthSlice = createSlice({
  name: "month",
  initialState: EmptyIndexMonthState,
  reducers: {
    increaseMonthIndex: (state) => {
      return state + 1;
    },
    decreaseMonthIndex: (state) => {
      return state - 1;
    },
    resetMonthIndex: () => {
      return EmptyIndexMonthState;
    },
  },
});

export const { increaseMonthIndex, decreaseMonthIndex, resetMonthIndex } =
  monthSlice.actions;

export const monthReducer = monthSlice.reducer;
