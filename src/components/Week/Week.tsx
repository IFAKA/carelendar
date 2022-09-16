import { IWeek } from "@/models";
import { Day } from "../Day";

const Week = ({ days }: IWeek) => (
  <div className="flex">
    {days.map((date, i) => (
      <Day day={date} key={i} />
    ))}
  </div>
);

export default Week;
