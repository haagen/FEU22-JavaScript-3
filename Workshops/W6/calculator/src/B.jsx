import { useDispatch } from "react-redux";
import { addNumber } from "./features/counter/calculatorSlice";

function B() {
  const dispatch = useDispatch();
  let onClick = (nbr) => {
    dispatch(addNumber(nbr));
  };
  let btns = [];
  for (let i = 0; i < 10; i++) {
    btns.push(
      <button
        key={i}
        onClick={(e) => {
          onClick(i);
        }}
      >
        {i}
      </button>
    );
  }

  return <>{btns}</>;
}

export default B;
