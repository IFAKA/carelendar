export const getDateByIndex = (monthIndex: number) => {
  const opts = { month: "short", year: "2-digit" } as const;
  const year = new Date().getFullYear();
  const unformatedDate = new Date(year, monthIndex);
  const date = unformatedDate.toLocaleDateString("en-US", opts);
  return date;
};

export default getDateByIndex;
