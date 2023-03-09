import { useSelector, useDispatch } from "react-redux";
import { getNewActivity, selectActivity } from "./slices/boredSlice";

function BoredActivity() {
  const activty = useSelector(selectActivity);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{activty}</h1>
      <button
        onClick={(e) => {
          dispatch(getNewActivity());
        }}
      >
        Get new activity
      </button>
    </>
  );
}

export default BoredActivity;
