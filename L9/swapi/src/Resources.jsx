import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectResouceNames,
  loadResources,
  selectResource,
} from "./redux/swapiSlice";

function Resources(props) {
  const resources = useSelector(selectResouceNames);
  const dispatch = useDispatch();
  const [selection, setSelection] = useState(""); // 'planets'

  useEffect(() => {
    if (resources.length === 0) {
      dispatch(loadResources());
    }
  });

  let formatResource = (str) => {
    let firstCharater = str.charAt(0).toUpperCase();
    return firstCharater + str.slice(1, str.length);
  };

  let onChange = (e) => {
    setSelection(e.target.value);
    dispatch(selectResource(e.target.value));
  };

  return (
    <div className="resourcesWrapper">
      <select name="resource" value={selection} onChange={onChange}>
        <option value="">Choose</option>
        {resources.length > 0 &&
          resources.map((e, i) => {
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
