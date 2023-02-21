import React from "react";

function useMyHook(props) {
  const [timer, setTimer] = React.useState(0);
  React.useDebugValue(timer);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((t) => t + 1);
    }, 1000);
    return () => {
      clearTimeout(interval);
    };
  }, []);

  return [timer];
}

export default useMyHook;
