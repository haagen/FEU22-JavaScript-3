import { useState, useEffect } from "react";

function useTimer(props) {
  const [timer, setTimer] = useState(!isNaN(props) ? props : 0);
  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return timer;
}

export default useTimer;
