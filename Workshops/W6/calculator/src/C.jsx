import React from "react";
import { selectNextValue } from "./features/counter/calculatorSlice";
import { useSelector } from "react-redux";

function C() {
  const nextValue = useSelector(selectNextValue);

  return <div>NextValue (C): {nextValue}</div>;
}

export default C;
