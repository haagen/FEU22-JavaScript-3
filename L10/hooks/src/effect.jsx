import React from "react";

function Effect(props) {
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    console.log("In useEffect!");
    let interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => {
      console.log("In the 'returning' functin");
      clearInterval(interval);
    };
  }, []);

  console.log("In the function body!");

  return (
    <>
      <strong>Timer: </strong> {timer} <br />
      Hello from Effect
    </>
  );
}

export default Effect;
