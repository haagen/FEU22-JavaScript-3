import React from "react";
import { selectCurrentValue } from "./features/counter/calculatorSlice";
import { useSelector } from "react-redux";
import C from "./C";
import B from "./B";
import D from "./D";

function A() {
  const currentValue = useSelector(selectCurrentValue);

  return (
    <>
      <div>CurrentValue (A): {currentValue}</div>
      <C />
      <B />
      <br />
      <D />
    </>
  );
}

export default A;
