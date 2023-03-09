import { useSelector, useDispatch } from "react-redux";
import {
  selectValue,
  add,
  remove,
  addDelayedCount,
} from "./slices/counterSlice";

function CounterVersion2() {
  const counter = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{counter}</h1>
      <button
        onClick={(e) => {
          dispatch(add(3));
        }}
      >
        Add 3
      </button>
      <br />
      <button
        onClick={(e) => {
          dispatch(remove(7));
        }}
      >
        Remove 7
      </button>
      <br />
      <button
        onClick={(e) => {
          dispatch(addDelayedCount({ delay: 3, count: 9 }));
        }}
      >
        Add Async
      </button>
    </>
  );
}

export default CounterVersion2;
