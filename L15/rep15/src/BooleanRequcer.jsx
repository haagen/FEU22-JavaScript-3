import { useReducer } from "react";

function BooleanReducer(props) {
  const [active, toggle] = useReducer((oldState) => !oldState, false);

  return (
    <>
      {active && "Lampan är tänd!"}
      {!active && "Lampan är släckt!"}
      <br />
      <button onClick={(e) => toggle()}>Lampknapp</button>
    </>
  );
}

export default BooleanReducer;
