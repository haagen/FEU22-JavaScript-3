import React from "react";
import ReactDOM from "react-dom/client";
import LifeCycle from "./lifecycle";
import Loop from "./loop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <LifeCycle /> */}
    <Loop />
  </React.StrictMode>
);
