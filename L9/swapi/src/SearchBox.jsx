import {
  selectSeletedResouce,
  setSearchText,
  searchAPI,
} from "./redux/swapiSlice";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function SearchBox() {
  const selectedResource = useSelector(selectSeletedResouce);
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");

  const onClick = (e) => {
    dispatch(setSearchText(searchString));
    dispatch(searchAPI());
  };

  return (
    <>
      <input
        type="text"
        value={searchString}
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <button
        disabled={selectedResource !== "" ? false : true}
        onClick={onClick}
      >
        Search
      </button>
    </>
  );
}

export default SearchBox;
