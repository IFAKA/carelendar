import { useReminder } from "@/hooks/useReminder";
import { resetSelectedDate, setSelectedDate, toggleForm, toggleList } from "@/redux";
import { formatDate } from "@/utils";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal";
import { ReminderItem } from "../ReminderItem";

const ReminderList = () => {
  const { selectedDate } = useSelector((state: RootStateOrAny) => state.reminders);
  const { dateReminders } = useReminder(selectedDate);
  const dispatch = useDispatch();
  
  const date = formatDate(selectedDate)

  const add = () => {
    dispatch(toggleForm())
    dispatch(setSelectedDate(selectedDate))
  };

  const hide = () => {
    dispatch(resetSelectedDate());
    dispatch(toggleList())
  }

  return (
    <Modal onClick={hide}>
      <div>{date}</div>
      <h2>Reminders: </h2>
      <div className="flex full gap reminders">
        {dateReminders.map((reminder, i) => (
          <ReminderItem reminder={reminder} key={i} />
        ))}
      </div>
      <button className="full mt" onClick={add}>
        Add
      </button>
    </Modal>
  );
};

export default ReminderList;
