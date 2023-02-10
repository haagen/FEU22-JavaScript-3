import { useState } from "react";

function App() {
  const [state, setState] = useState({
    formIsValid: true,
    isMinor: false,
  });

  let validate = (e) => {
    console.log("Validate: " + e.target.value);
    setState({
      formIsValid: e.target.value >= 4 && e.target.value <= 75,
      isMinor: !isNaN(e.target.value) && e.target.value < 18,
    });
  };

  return (
    <div>
      <h1>Anmäl till Danslektion</h1>
      <form>
        <label htmlFor="name">Namn</label>
        <input id="name" />
        <br />
        <label htmlFor="email">Email</label>
        <input id="email" />
        <br />
        <label htmlFor="age">Ålder</label>
        <input id="age" type="number" onChange={validate} />
        {!state.formIsValid && (
          <div>
            Du måste vara mellan 4 och 75 år för att anmäla dig till denna
            kursen.
          </div>
        )}
        {state.isMinor && (
          <div>
            <input type="checkbox" name="parentAgree" /> Jag som målsman anmäler
            mitt barn
          </div>
        )}
        <br />
        <button>Skicka</button>
      </form>
    </div>
  );
}

export default App;
