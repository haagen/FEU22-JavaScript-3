import "./App.css";
import CustomHook from "./customhook";
import Effect from "./effect";
import Reducer from "./reducer";
import State from "./state";

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect />
      <hr />
      <Reducer />
      <hr />
      <CustomHook />
    </div>
  );
}

export default App;
