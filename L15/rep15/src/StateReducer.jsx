import { useReducer } from "react";

function StateReducer(props) {
  const [state, setState] = useReducer((oldState, payload) => {
    return payload;
  }, "Martin");
  //const [state, setState] = useState("Martin");

  return (
    <>
      Mitt namn är just nu: <strong>{state}</strong>
      <br />
      <button
        onClick={(e) => {
          setState("Ayat");
        }}
      >
        Ayat
      </button>
      <button
        onClick={(e) => {
          setState("Simon");
        }}
      >
        Simon
      </button>
    </>
  );
}

export default StateReducer;
