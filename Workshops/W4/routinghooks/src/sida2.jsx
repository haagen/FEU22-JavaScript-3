import { useReducer } from "react";

function Sida2() {
  // payload, action (dvs + eller -), value (talet)
  const [reducer, dispatch] = useReducer((oldState, payload) => {
    if (payload.action === "-") {
      return oldState - payload.value;
    }
    return oldState + payload.value;
  }, 0);

  let getButtons = (symbol) => {
    let ret = [];
    for (let i = 1; i < 10; i++) {
      ret.push(
        <button
          onClick={(e) => {
            dispatch({ action: symbol, value: i });
          }}
        >
          {symbol} {i}
        </button>
      );
    }
    return ret;
  };

  return (
    <>
      <h1>Sida 2 - Calculator</h1>
      The number is now: <strong>{reducer}</strong>
      <br />
      {getButtons("+")}
      <br />
      {getButtons("-")}
    </>
  );
}

export default Sida2;
