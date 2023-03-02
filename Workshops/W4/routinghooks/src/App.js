import "./App.css";
import Sida1 from "./sida1";
import Sida2 from "./sida2";
import Sida3 from "./sida3";
import Error from "./error";
import { NavLink, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink
        end
        to=""
        className={({ isActive }) => {
          return isActive ? "ActiveMenu" : undefined;
        }}
      >
        Sida 1 - Hem
      </NavLink>
      &nbsp;
      <NavLink
        end
        to="/sida2/"
        className={({ isActive }) => {
          return isActive ? "ActiveMenu" : undefined;
        }}
      >
        Sida 2 - Calculator
      </NavLink>
      &nbsp;
      <NavLink
        end
        to="/sida3/"
        className={({ isActive }) => {
          return isActive ? "ActiveMenu" : undefined;
        }}
      >
        Sida 3 - Timer
      </NavLink>
      <hr />
      <Routes>
        <Route path="" element={<Sida1 />} />
        <Route path="/sida2/" element={<Sida2 />} />
        <Route path="/sida3/" element={<Sida3 />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
