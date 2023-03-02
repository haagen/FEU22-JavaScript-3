import useTimer from "./useTimer";

function Sida3() {
  const myTimer = useTimer();

  return (
    <>
      <h1>Sida 3 - Timer</h1>
      The timer is now: <strong>{myTimer}</strong>
    </>
  );
}

export default Sida3;
