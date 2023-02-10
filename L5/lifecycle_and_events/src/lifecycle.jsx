import React, { Component } from "react";

class LifeCycle extends Component {
  // Will be run when component is created (mounted)
  constructor(props) {
    super(props);
    console.log("In the constructor!");
    this.state = {
      counter: 0,
    };
    this.interval = undefined;
  }

  // Will be run when component is created or updated
  static getDerivedStateFromProps(props, state) {
    console.log("In getDerivedStateFromProps(", props, ",", state, ")");
    return state;
  }

  // Will be run when compenent is being updated
  shouldComponentUpdate() {
    console.log("In shouldComponentUpdate()");
    // if (this.state.counter % 10 === 0) {
    //   return true;
    // }
    // return false;
    return true;
  }

  // Will be run when component is created or updated
  render() {
    console.log("In render()");
    return (
      <>
        <h1>Hello React</h1>
        <p>Counter: {this.state.counter}</p>
      </>
    );
  }

  // Will be run when compenent is being updated
  getSnapshotBeforeUpdate() {
    console.log("In getSnapshotBeforeUpdate()");
    return null;
  }

  // Will be run when component is created (mounted)
  componentDidMount() {
    console.log("In componentDidMount()");
    if (this.interval === undefined) {
      this.interval = setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000);
    }
    //console.log("Interval: ", this.interval);
  }

  // Will be run when component is being updated
  componentDidUpdate() {
    console.log("In componentDidUpdate()");
    // console.log("Interval: ", this.interval);
    // if (this.state.counter === 8) {
    //   clearInterval(this.interval);
    // }
  }

  // Will be run when the component is being unmounted (removed)
  componentWillUnmount() {
    console.log("componentWillUnmount()");
    if (this.interval !== undefined) {
      clearInterval(this.interval);
      this.interval = undefined;
    }
  }
}

export default LifeCycle;
