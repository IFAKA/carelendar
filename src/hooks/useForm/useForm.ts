import { IReminder } from "@/models";
import { addReminder, deleteReminder, resetSelectedDate, resetSelectedReminder, toggleForm, toggleList, updateReminder } from "@/redux";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

import { v4 } from "uuid";
import { useReminder } from "../useReminder";

const useForm = () => {
  const { hasSelectedReminder, selectedReminder, selectedDate } = useSelector(
    (state: RootStateOrAny) => state.reminders
  );
  const { dateHasReminders, dateReminders } = useReminder(selectedDate)
  const [form, setForm] = useState(selectedReminder);
  const dispatch = useDispatch();

  const addId = (form: IReminder) => ({ ...form, id: v4() });

  const save = () => {
    if (!hasSelectedReminder && form.date === selectedDate) {
      dispatch(addReminder(addId(form)))
      !dateHasReminders && dispatch(resetSelectedDate())
    }
    if (hasSelectedReminder && form.date === selectedDate) {
      dispatch(updateReminder(form))
      dispatch(resetSelectedReminder())
    }
    if (hasSelectedReminder && form.date !== selectedDate) {
      dispatch(deleteReminder(form))
      dispatch(addReminder(form))
      dispatch(resetSelectedReminder())
      if (dateReminders.length === 1) {
        dispatch(resetSelectedDate())
        dispatch(toggleList())
      }
    };
    dispatch(toggleForm())
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevState: IReminder) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    setForm((prevState: IReminder) => ({
      ...prevState,
      date: selectedDate,
    }));
  }, [selectedDate]);

  return { form, handleChange, save };
};

export default useForm;
