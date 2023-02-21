import React from "react";

function State() {
  const [number, setNumber] = React.useState(() => {
    return Math.floor(Math.random() * 10) + 1;
  });

  /*
  let name1 = [];
  let name2 = [];

  if (number % 2 === 0) {
    name1 = React.useState("Martin");
    name2 = React.useState("Victor");
  } else {
    name2 = React.useState("Victor");
    name1 = React.useState("Martin");
  }
  */

  return (
    <>
      <strong>Mitt nummer är: </strong>
      {number}
      <br />
      <button
        onClick={(e) => {
          return setNumber((v) => v + 1);
        }}
      >
        +1
      </button>
      <button
        onClick={(e) => {
          return setNumber(0);
        }}
      >
        0
      </button>
    </>
  );
}

export default State;
