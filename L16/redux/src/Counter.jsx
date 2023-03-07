import { useState } from "react";

function Counter() {
  // State
  const [counter, setCounter] = useState(0);

  // Action
  const addMethod = (e) => {
    setCounter((c) => c + 1);
  };

  // View
  return (
    <>
      <h2>Traditional Counter</h2>
      Counter: {counter}
      <br />
      <button onClick={addMethod}>Add 1</button>
    </>
  );
}

export default Counter;
