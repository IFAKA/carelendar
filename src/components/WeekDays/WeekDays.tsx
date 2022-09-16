import { weekDays } from "@/constants";
import React from "react";

const WeekDays = () => {
  return (
    <div className="weekdays full flex">
      {weekDays.map((dayName, i) => (
        <div className="full" key={i}>
          {dayName}
        </div>
      ))}
    </div>
  );
};

export default WeekDays;
