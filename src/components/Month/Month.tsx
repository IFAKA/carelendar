import { useMonth } from "@/hooks/useMonth";
import { Week } from "../Week";

const Month = () => {
  const month = useMonth();
  return (
    <>
      {month.map((days, i) => (
        <Week days={days} key={i} />
      ))}
    </>
  );
};

export default Month;
