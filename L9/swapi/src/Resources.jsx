import { useState, useEffect } from "react";

function Resources(props) {
  const [state, setState] = useState([]); // ['planets', 'starships', ...]
  const [selection, setSelection] = useState(""); // 'planets'

  useEffect(() => {
    let getResources = () => {
      fetch("https://swapi.dev/api/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(Object.keys(data));
          setState(Object.keys(data));
        });
    };
    getResources();
  }, []);

  let formatResource = (str) => {
    let firstCharater = str.charAt(0).toUpperCase();
    return firstCharater + str.slice(1, str.length);
  };

  let onChange = (e) => {
    setSelection(e.target.value);
    if (props.onSelect !== undefined) {
      props.onSelect(e.target.value);
    }
  };

  return (
    <div className="resourcesWrapper">
      <select name="resource" value={selection} onChange={onChange}>
        <option value="">Choose</option>
        {state.length > 0 &&
          state.map((e, i) => {
            return (
              <option value={e} key={i}>
                {formatResource(e)}
              </option>
            );
          })}
      </select>
    </div>
  );
}

export default Resources;
