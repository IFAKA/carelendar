import { EmptyRemindersState, EmptySelectedDate, EmptySelectedReminder } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

export const remindersSlice = createSlice({
  name: "reminders",
  initialState: EmptyRemindersState,
  reducers: {
    addReminder: (state, { payload }) => {
      const addedReminder = [...state.reminders, payload];
      return {
        ...state,
        reminders: addedReminder,
      };
    },
    updateReminder: (state, { payload }) => {
      const updatedReminder = state.reminders.map((reminder) =>
        reminder.id === payload.id ? payload : reminder
      );
      return {
        ...state,
        reminders: updatedReminder,
      };
    },
    deleteReminder: (state, { payload }) => {
      const filteredReminder = state.reminders.filter(
        (reminder) => reminder.id !== payload.id
      );
      return {
        ...state,
        reminders: filteredReminder,
      };
    },

    setSelectedReminder: (state, { payload: reminder }) => {
      return {
        ...state,
        selectedReminder: reminder,
        hasSelectedReminder: true,
      };
    },
    resetSelectedReminder: (state) => {
      return {
        ...state,
        selectedReminder: EmptySelectedReminder,
        hasSelectedReminder: false,
      };
    },

    setSelectedDate: (state, { payload: date }) => {
      return {
        ...state,
        selectedDate: date,
      };
    },
    resetSelectedDate: (state) => {
      return {
        ...state,
        selectedDate: EmptySelectedDate,
      };
    },
  },
});

export const {
  addReminder,
  updateReminder,
  deleteReminder,

  setSelectedReminder,
  resetSelectedReminder,

  setSelectedDate,
  resetSelectedDate,
} = remindersSlice.actions;

export const remindersReducer = remindersSlice.reducer;
