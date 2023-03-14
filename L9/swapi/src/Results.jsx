import People from "./People";
import { useSelector, useDispatch } from "react-redux";
import spinner from "./spinner.png";
import "./Results.css";

import {
  selectSeletedResouce,
  selectSearchResults,
  selectNext,
  loadMore,
  selectShowSpinner,
} from "./redux/swapiSlice";
import Planets from "./Planets";

function Results() {
  const dispatch = useDispatch();
  const resource = useSelector(selectSeletedResouce);
  const data = useSelector(selectSearchResults);
  const next = useSelector(selectNext);
  const showSpinner = useSelector(selectShowSpinner);

  let renderResult = (e, i) => {
    switch (resource) {
      case "people":
        return <People key={i} data={e} />;
      case "planets":
        return <Planets key={i} data={e} />;
      default:
        return <>Unknown resource</>;
    }
  };

  let callLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className="resultsWrapper">
      {showSpinner ? (
        <img src={spinner} alt="spinner" className="spinner" />
      ) : (
        <table>
          <tbody>
            {data.length > 0 &&
              data.map((e, i) => {
                return renderResult(e, i);
              })}
          </tbody>
        </table>
      )}
      {next && <button onClick={callLoadMore}>Ladda mer</button>}
    </div>
  );
}

export default Results;
