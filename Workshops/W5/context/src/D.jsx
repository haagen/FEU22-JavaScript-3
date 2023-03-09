import { useContext } from "react";
import CounterContext from "./context/CounterContext";

function D() {
  const counter = useContext(CounterContext);

  return (
    <>
      D:
      <button
        onClick={(e) => {
          counter.setValue((v) => v + 1);
        }}
      >
        Add 1
      </button>
    </>
  );
}

export default D;
