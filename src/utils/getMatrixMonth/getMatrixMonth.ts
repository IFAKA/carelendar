import { TypeDate } from "@/models";

export const getMatrixMonth = (month = new Date().getMonth()) => {
  const year = new Date().getFullYear();
  const firstDayOfTheMonth = new Date(year, month, 1).getDay();

  let currentMonthCount = 0 - firstDayOfTheMonth;

  const weeksRow = new Array(5).fill([]);
  const daysColumn = new Array(7).fill({});

  const monthMatrix: TypeDate[][] = weeksRow.map(() =>
    daysColumn.map(() => new Date(year, month, ++currentMonthCount).toLocaleDateString("en-CA"))
  );

  return monthMatrix;
};

export default getMatrixMonth;
