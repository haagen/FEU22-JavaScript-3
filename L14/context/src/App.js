import "./App.css";
import UserPrefsProvider from "./provider/UserPrefsProvider";
import SubscriberClassComponent from "./SubscriberClassComponent";
import SubscriberFunctionComponent from "./SubscriberFunctionComponent";

function App() {
  return (
    <>
      <UserPrefsProvider>
        What we put here can use the context (consume). <br />
        <hr />
        <SubscriberClassComponent />
        <hr />
        <SubscriberFunctionComponent />
      </UserPrefsProvider>
    </>
  );
}

export default App;
