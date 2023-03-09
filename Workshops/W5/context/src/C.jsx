import { useContext } from "react";
import CounterContext from "./context/CounterContext";

function C() {
  const counter = useContext(CounterContext);

  return (
    <>
      C: {counter.value}
      <br />
    </>
  );
}

export default C;
