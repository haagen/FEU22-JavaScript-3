import React from "react";

// payload: { action: add/substract, value: 2 }
function reducerFunction(oldState, payload) {
  switch (payload.action) {
    case "add":
      return oldState + payload.value;
    case "subtract":
      return oldState - payload.value;
    default:
      return oldState;
  }
}

function Reducer(props) {
  const [counter, dispatch] = React.useReducer(reducerFunction, 0);

  return (
    <>
      <strong>My counter: </strong> {counter}
      <br />
      <button
        onClick={(e) => {
          dispatch({ action: "add", value: 2 });
        }}
      >
        +2
      </button>
      <button
        onClick={(e) => {
          dispatch({ action: "subtract", value: 5 });
        }}
      >
        -5
      </button>
    </>
  );
}

export default Reducer;
