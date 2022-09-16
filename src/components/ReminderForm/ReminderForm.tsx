import { useReminder } from "@/hooks";
import { useForm } from "@/hooks/useForm";
import { resetSelectedDate, resetSelectedReminder, toggleForm } from "@/redux";
import { formatDate } from "@/utils";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";

const ReminderForm = () => {
  const { selectedDate, hasSelectedReminder } = useSelector(
    (state: RootStateOrAny) => state.reminders
  );
  const dispatch = useDispatch()
  const { dateHasReminders } = useReminder(selectedDate)
  const { form, handleChange, save } = useForm();
  
  const date = formatDate(selectedDate)

  const hide = () => {
    hasSelectedReminder && dispatch(resetSelectedReminder())
    !dateHasReminders && dispatch(resetSelectedDate());
    dispatch(toggleForm())
  }

  return (
    <Modal onClick={hide}>
      <div>{date}</div>
      <h2>Reminder</h2>
      <input
        value={form.title}
        name={"title"}
        placeholder={"Title"}
        onChange={handleChange}
      />
      {hasSelectedReminder && (
        <input
          value={form.date}
          name={"date"}
          type="date"
          onChange={handleChange}
        />
      )}
      <input
        value={form.time}
        name={"time"}
        type="time"
        onChange={handleChange}
      />
      <button className="full mt" onClick={save}>
        Save
      </button>
    </Modal>
  );
};

export default ReminderForm;
