import { useDispatch } from "react-redux";
import {
  addition,
  subtraction,
  multiplication,
  division,
  clear,
} from "./features/counter/calculatorSlice";

function D() {
  const dispatch = useDispatch();
  let onClick = (ac) => dispatch(ac());

  return (
    <>
      <button
        onClick={(e) => {
          onClick(addition);
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          onClick(subtraction);
        }}
      >
        -
      </button>
      <button
        onClick={(e) => {
          onClick(multiplication);
        }}
      >
        *
      </button>
      <button
        onClick={(e) => {
          onClick(division);
        }}
      >
        /
      </button>
      <button
        onClick={(e) => {
          onClick(clear);
        }}
      >
        C
      </button>
    </>
  );
}

export default D;
