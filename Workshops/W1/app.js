/*
    <!--
    <div>
      <h1>Anmäl till Danslektion</h1>
      <form>
        <label for="name">Namn</label>
        <input id="name" /><br />
        <label for="email">Email</label>
        <input id="email" /><br />
        <button>Skicka</button>
      </form>
    </div>  
    -->

*/

"use strict";

class DansSchool extends React.Component {
  render() {
    return React.createElement("div", null, [
      React.createElement("h1", null, "Anmäl till Danslektion"),
      React.createElement("form", null, [
        React.createElement("label", { htmlFor: "name" }, "Name"),
        React.createElement("input", { id: "name" }),
        React.createElement("br"),
        React.createElement("label", { htmlFor: "email" }, "Email"),
        React.createElement("input", { id: "email" }),
        React.createElement("br"),
        React.createElement("button", null, "Skicka"),
      ]),
    ]);
  }
}

const root = document.getElementById("root");
ReactDOM.render(React.createElement(DansSchool), root);
