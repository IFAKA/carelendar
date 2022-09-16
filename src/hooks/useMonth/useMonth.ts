import { getMatrixMonth } from "@/utils/getMatrixMonth";
import { useEffect, useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

const useMonth = () => {
  const monthIndex = useSelector((state: RootStateOrAny) => state.month)
  const [currentMonth, setCurrentMonth] = useState(getMatrixMonth())

  useEffect(() => {
    setCurrentMonth(getMatrixMonth(monthIndex));
  }, [monthIndex]);

  return currentMonth;
};

export default useMonth;
