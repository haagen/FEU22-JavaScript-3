import "./App.css";
import Resources from "./Resources";
import Results from "./Results";
import SearchBox from "./SearchBox";

function App() {
  return (
    <div className="swapiapp">
      <SearchBox /> <Resources />
      <Results />
    </div>
  );
}

export default App;
