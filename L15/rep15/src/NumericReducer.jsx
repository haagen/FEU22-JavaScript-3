import { useReducer } from "react";

const setCounter = (oldState, payload) => {
  return oldState + payload;
};

function NumericReducer(props) {
  const [counter, updateCounter] = useReducer(setCounter, 0);

  return (
    <>
      My counter: <strong>{counter}</strong>
      <br />
      <button
        onClick={(e) => {
          updateCounter(5);
        }}
      >
        Add 5
      </button>
      <button
        onClick={(e) => {
          updateCounter(1);
        }}
      >
        Add 1
      </button>
      <button
        onClick={(e) => {
          updateCounter(-13);
        }}
      >
        Remove 13
      </button>
    </>
  );
}

export default NumericReducer;
