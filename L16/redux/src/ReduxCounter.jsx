import { useSelector, useDispatch } from "react-redux";
import { selectorCounter, addCounter, removeCounter } from "./counterReducer";

function ReduxCounter() {
  // State
  const counter = useSelector(selectorCounter);
  const dispatch = useDispatch();

  // View
  return (
    <>
      <h2>Redux Counter</h2>
      Counter: {counter} <br />
      <button
        onClick={(e) => {
          dispatch(addCounter(42));
        }}
      >
        Add 42
      </button>
      <button
        onClick={(e) => {
          dispatch(removeCounter(10));
        }}
      >
        Remove 10
      </button>
    </>
  );
}

export default ReduxCounter;
