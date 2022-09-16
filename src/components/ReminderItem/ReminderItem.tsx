import { useReminder } from "@/hooks";
import { IReminderItem } from "@/models";
import { deleteReminder, resetSelectedDate, setSelectedReminder, toggleForm, toggleList } from "@/redux";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const ReminderItem = ({ reminder }: IReminderItem) => {
  const { time, title } = reminder;
  const { selectedDate } = useSelector((state: RootStateOrAny) => state.reminders);
  const { dateReminders } = useReminder(selectedDate);
  const dispatch = useDispatch();

  const edit = () => {
    dispatch(toggleForm())
    dispatch(setSelectedReminder(reminder))
  };

  const remove = () => {
    dispatch(deleteReminder(reminder));
    if (dateReminders.length === 1) {
      dispatch(resetSelectedDate())
      dispatch(toggleList())
    }
  }

  return (
    <div className="reminder-box full centery">
      <button className="reminder-title full flex centery" onClick={edit}>
        <div>{time}</div>
        <div>{title}</div>
      </button>
      <button className="delete" onClick={remove}>
        &#9003;
      </button>
    </div>
  );
};

export default ReminderItem;
