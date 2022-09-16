import { IReminder, IReminders, TypeDate } from "@/models";
import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

const useReminder = (dateFromDay: TypeDate) => {
  const { reminders } = useSelector<RootStateOrAny, IReminders>((state) => state.reminders);

  const [dateHasReminders, setDateHasReminders] = useState(false);
  const [dateReminders, setDateReminders] = useState<IReminder[]>(reminders);

  useEffect(() => {
    setDateReminders(reminders.filter((reminder) => reminder.date === dateFromDay))
    setDateHasReminders(reminders.some((reminder) => reminder.date === dateFromDay));
  }, [reminders, dateFromDay]);

  return { dateReminders, dateHasReminders };
};
export default useReminder;
