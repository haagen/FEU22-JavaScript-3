import { useState } from "react";
import B from "./B";
import CounterContext from "./context/CounterContext";

function A() {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={{ value: counter, setValue: setCounter }}>
      <B />
    </CounterContext.Provider>
  );
}

export default A;
