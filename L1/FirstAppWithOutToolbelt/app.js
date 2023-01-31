"use strict";

class FirstAppWithoutToolbelt extends React.Component {
  state = {};

  constructor(props) {
    super(props); // Run the constructor in the extended class (React.Component)
    console.log(props);
    //this.state.language = "JavaScript";
    this.state.language = props.language; // Update the internal state
  }

  render() {
    // createElement(type, props, ...children)
    // <h1>Jag älskar JavaScript</h1>
    return React.createElement("div", { className: "warning" }, [
      React.createElement("h1", null, "Jag älskar " + this.state.language),
      React.createElement("div", null, "Hejsan Svejsan"),
    ]);
  }
}

const root = document.getElementById("root");
let myObject = { language: "PHP" };
ReactDOM.render(
  React.createElement(FirstAppWithoutToolbelt, myObject, null), // Element to Render
  root // Where to render
);
