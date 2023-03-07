// Action Creator - en funktion som skapar
// ett JS Objekt.
export const addCounter = (nbr) => {
  return {
    type: "counter/add",
    payload: nbr,
  };
};

export const removeCounter = (nbr) => {
  return {
    type: "counter/remove",
    payload: nbr,
  };
};

const initialValue = {
  value: 0,
};

// Reucer funktion - används för att med hjälp av ett
// action objekt och den gamla staten beräkna den
// nya staten.
function counterReducer(oldState = initialValue, action) {
  /*
  if (action.type === "counter/add") {
    return {
      ...oldState, // Detta skapar en kopia på den gamla staten - ändra ALDRIG state:en direkt!
      value: oldState.value + action.payload,
    };
  }
  */
  switch (action.type) {
    case "counter/add":
      return {
        ...oldState, // Detta skapar en kopia på den gamla staten - ändra ALDRIG state:en direkt!
        value: oldState.value + action.payload,
      };
    case "counter/remove":
      return {
        ...oldState,
        value: oldState.value - action.payload,
      };
    default:
  }
  return oldState;
}

export default counterReducer;

export const selectorCounter = (state) => {
  return state.value;
};
