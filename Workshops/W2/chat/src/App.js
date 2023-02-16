import "./App.css";
import ChatBox from "./ChatBox";
import MessageList from "./MessageList";
import { useState } from "react";

function App() {
  const [state, setState] = useState([]);

  let addMessage = (name, message) => {
    let newState = [...state, { user: name, text: message }];
    setState(newState);

    /*
   Kommer inte att fungera eftersom react inte
   kan se vad som har förändrats!!!

   Never change the state directly!!!!!!!!!!

    state.push({ user: name, text: message });
    setState(state);
  */
  };

  return (
    <>
      <ChatBox name="Martin" onMessage={addMessage} />
      <ChatBox name="Victor" onMessage={addMessage} />
      <MessageList messages={state} />
    </>
  );
}

export default App;
