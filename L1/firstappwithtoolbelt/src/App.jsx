import { useState } from "react";

function App(props) {
  console.log(props);

  const [language] = useState("JavaScript");

  return (
    <div>
      <h1>Jag älskar {language}</h1>
      <div>Hejsan Svejsan</div>
    </div>
  );
}

export default App;
