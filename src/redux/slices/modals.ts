import { EmptyModalsState } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const modalsSlice = createSlice({
  name: "modals",
  initialState: EmptyModalsState,
  reducers: {
    toggleForm: (state) => ({ ...state, showForm: !state.showForm }),
    toggleList: (state) => ({ ...state, showList: !state.showList })
  },
});

export const {
  toggleForm,
  toggleList,
} = modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;
