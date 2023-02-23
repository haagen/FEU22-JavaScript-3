import "./App.css";
import { Link, Routes, Route, NavLink, useParams } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="header">
        <strong>Menu: </strong>
        <NavLink
          end
          to=""
          className={({ isActive }) => (isActive ? "ActiveMenu" : undefined)}
        >
          Home
        </NavLink>
        &nbsp;
        <NavLink
          end
          to="/page1/"
          className={({ isActive }) => (isActive ? "ActiveMenu" : undefined)}
        >
          Sida 1
        </NavLink>
        &nbsp;
        <NavLink
          end
          to="/page2/"
          className={({ isActive }) => (isActive ? "ActiveMenu" : undefined)}
        >
          Sida 2
        </NavLink>
      </div>
      <div className="body">
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/page1/" element={<Sida1 />} />
          <Route path="/page2/" element={<Sida2 />} />
          <Route path="/page2/:id" element={<Sida2 />} />
        </Routes>
      </div>
    </div>
  );
}

function Home(props) {
  return (
    <>
      Hello from Home
      <br />
      Kolla in den nya fina <Link to="/page2/523">stänkskärmen</Link>.
    </>
  );
}

function Sida1(props) {
  return (
    <>
      Hello from Sida1
      <br />
      <Link to="/">Home</Link>
    </>
  );
}

function Sida2(props) {
  const parameters = useParams();

  return (
    <>
      Hello from Sida2 <br />
      {parameters.id && <>Du gav mig id nummer {parameters.id}</>}
    </>
  );
}

export default App;
