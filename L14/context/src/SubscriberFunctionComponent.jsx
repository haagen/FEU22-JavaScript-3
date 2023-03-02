import PrefsContext from "./context/PrefsContext";
import { useContext } from "react";

function SubscriberFunctionComponent() {
  const userPref = useContext(PrefsContext);

  return (
    <>
      <strong>This is a function component!</strong>
      <br />
      Your language preference is {userPref.language}.<br />
      Your mode is set to {userPref.mode}.<br />
      <button
        onClick={(e) => {
          userPref.setLanguage("Finnish");
        }}
      >
        Set Language to Finnish
      </button>
    </>
  );
}

export default SubscriberFunctionComponent;
