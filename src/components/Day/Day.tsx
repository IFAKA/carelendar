import { useReminder } from "@/hooks/useReminder";
import { IDay } from "@/models";
import { setSelectedDate, toggleForm, toggleList } from "@/redux";
import { useDispatch } from "react-redux";

const Day = ({ day }: IDay) => {
  const { dateHasReminders } = useReminder(day);
  const dispatch = useDispatch();

  const today = new Date().toLocaleDateString("en-CA");
  const daydd = +day.slice(-2);

  const selectDay = () => {
    dispatch(setSelectedDate(day))
    dateHasReminders
      ? dispatch(toggleList())
      : dispatch(toggleForm())
  }

  return (
    <button
      className={`day full center ${day === today && "today"} ${dateHasReminders && "has-reminders"}`}
      onClick={selectDay}
    >
      {daydd}
    </button>
  );
};

export default Day;
