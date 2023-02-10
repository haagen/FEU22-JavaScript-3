import React, { Component } from "react";

class EventsClass extends Component {
  constructor(props) {
    super(props);
    this.withBind = this.withBind.bind(this);
    this.checkTarget = this.checkTarget.bind(this);
  }
  state = {
    name: "Martin",
  };

  noBind() {
    console.log("My name is", this.state.name);
  }

  withBind() {
    console.log("My name is", this.state.name);
  }

  arrowBind = (e) => {
    console.log("My name is", this.state.name);
  };

  checkTarget(e) {
    console.log("My id is", e.target.dataset.id);
    console.dir(e);
  }

  render() {
    return (
      <>
        <button onClick={this.noBind}>No Bind (will explode)</button>
        <button onClick={this.withBind}>With Bind</button>
        <button onClick={this.arrowBind}>Arrow Bind</button>
        <input
          name="email"
          type="text"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        <button data-id="15" onClick={this.checkTarget}>
          Check Target
        </button>
      </>
    );
  }
}

export default EventsClass;
