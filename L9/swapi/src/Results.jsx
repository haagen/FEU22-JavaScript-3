import People from "./People";

function Results(props) {
  let renderResult = (e, i) => {
    switch (props.resource) {
      case "people":
        return <People key={i} data={e} />;
      default:
        return <>Unknown resource</>;
    }
  };

  return (
    <div className="resultsWrapper">
      <table>
        {props.data.length > 0 &&
          props.data.map((e, i) => {
            return renderResult(e, i);
          })}
      </table>
    </div>
  );
}

export default Results;
