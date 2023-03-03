import "./App.css";
import BooleanReducer from "./BooleanRequcer";
import NumericReducer from "./NumericReducer";
import StateReducer from "./StateReducer";

function App() {
  return (
    <>
      <NumericReducer />
      <hr />
      <BooleanReducer />
      <hr />
      <StateReducer />
    </>
  );
}

export default App;
