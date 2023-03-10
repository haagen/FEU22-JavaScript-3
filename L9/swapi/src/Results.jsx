import People from "./People";
import { useSelector, useDispatch } from "react-redux";
import {
  selectSeletedResouce,
  selectSearchResults,
  selectNext,
  loadMore,
} from "./redux/swapiSlice";

function Results() {
  const dispatch = useDispatch();
  const resource = useSelector(selectSeletedResouce);
  const data = useSelector(selectSearchResults);
  const next = useSelector(selectNext);

  let renderResult = (e, i) => {
    switch (resource) {
      case "people":
        return <People key={i} data={e} />;
      default:
        return <>Unknown resource</>;
    }
  };

  let callLoadMore = () => {
    dispatch(loadMore());
  };

  return (
    <div className="resultsWrapper">
      <table>
        {data.length > 0 &&
          data.map((e, i) => {
            return renderResult(e, i);
          })}
      </table>
      {next && <button onClick={callLoadMore}>Ladda mer</button>}
    </div>
  );
}

export default Results;
