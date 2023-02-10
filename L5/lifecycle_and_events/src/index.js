import React from "react";
import ReactDOM from "react-dom/client";
import LifeCycle from "./lifecycle";
import Loop from "./loop";
import EventsClass from "./events.jsx";
import StaticExample from "./staticExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LifeCycle /> */}
    <Loop />
    <EventsClass />
    <StaticExample />
  </React.StrictMode>
);
