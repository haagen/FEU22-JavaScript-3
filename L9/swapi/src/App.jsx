import "./App.css";
import Resources from "./Resources";
import Results from "./Results";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]); // [ { }, ... ]
  const [resourceName, setResourceName] = useState("");

  let onSelect = (e) => {
    setResourceName(e);
    // If no resource selected - empty search result, but do not search.
    if (e === "") {
      setSearchResults([]);
      return;
    }

    fetch(`https://swapi.dev/api/${e}`)
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        setSearchResults(data.results);
        console.log(data);
      });
  };

  return (
    <div className="swapiapp">
      <Resources onSelect={onSelect} />
      <Results data={searchResults} resource={resourceName} />
    </div>
  );
}

export default App;
