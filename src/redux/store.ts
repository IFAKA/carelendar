import { configureStore } from "@reduxjs/toolkit";
import { modalsReducer, monthReducer, remindersReducer } from "./slices";

const store = configureStore({
  reducer: {
    reminders: remindersReducer,
    month: monthReducer,
    modals: modalsReducer,
  },
});

export default store;
