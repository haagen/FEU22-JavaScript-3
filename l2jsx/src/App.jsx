import "./App.css";
import React from "react";

/*

Mark-up från getBootstrap / Documentationen

<div class="container">
  <div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>

*/

/*

  Bootstrap Card "Manuellt" - genom att skapa createElement() manuellt.

function App() {
  return React.createElement(
    "div",
    { className: "container" },
    React.createElement(
      "div",
      { className: "card", style: { width: "18rem" } },
      [
        React.createElement("img", {
          src: "logo192.png",
          className: "card-img-top",
          alt: "My Alt Text",
        }),
        React.createElement("div", { className: "card-body" }, [
          React.createElement("h5", { className: "card-title" }, "Card title"),
          React.createElement(
            "p",
            { className: "card-text" },
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          ),
          React.createElement(
            "a",
            { href: "#", className: "btn btn-primary" },
            "Go somewhere"
          ),
        ]),
      ]
    )
  );
}
*/

/*

 Bootstrap Card med JSX

 */

export function CheckRetired(person) {
  //return <p>Name: {person.firstname + " " + person.lastname}</p>;
  if (person.retriedAtAge !== undefined) {
    return <p>Retired at age: {person.retriedAtAge}</p>;
  }
  return <p>Have not yet retired</p>;
}

function App() {
  let person = {
    firstname: "Martin",
    lastname: "Haagen",
    retriedAtAge: 35,
  };

  return (
    <>
      <p>
        Name:
        {`${person.firstname + " " + person.lastname}`}
      </p>
      {CheckRetired(person)}
    </>
  );

  /*
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img src="logo192.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://googlo.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
      <br /> <br /> <hr /> <br />
      {person.retriedAtAge !== undefined && (
        <p>Retired at age: {person.retriedAtAge}</p>
      )}
      {person.retriedAtAge !== undefined ? (
        <p>Retired at age: {person.retriedAtAge}</p>
      ) : (
        <p>Has not retired yet!</p>
      )}
    </div>
  );
  */
}

export default App;
