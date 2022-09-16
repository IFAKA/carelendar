import { decreaseMonthIndex, increaseMonthIndex, resetMonthIndex } from "@/redux";
import { getDateByIndex } from "@/utils/getDateByIndex";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const monthIndex = useSelector((state: RootStateOrAny) => state.month);
  const dispatch = useDispatch();
  const date = getDateByIndex(monthIndex)

  const prev = () => dispatch(decreaseMonthIndex());
  const next = () => dispatch(increaseMonthIndex());
  const reset = () => dispatch(resetMonthIndex());

  return (
    <div className="navbar full centery">
      <button onClick={reset}>
        Today
      </button>
      <div>
        <button onClick={prev}>
          Prev
        </button>
        <button onClick={next}>
          Next
        </button>
      </div>
      <h2>
        {date}
      </h2>
    </div>
  );
};

export default Navbar;
