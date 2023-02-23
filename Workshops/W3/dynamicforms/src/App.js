import React from "react";
import styled from "styled-components";
import "./App.css";

const Label = styled.label`
  font-weight: 800;
`;

class DynamicForm extends React.Component {
  constructor(props) {
    super(props);
    this.inputChanged = this.inputChanged.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.nameRef = React.createRef();
    this.emailRef = React.createRef();
    this.colorRef = React.createRef();
    this.shoeRef = React.createRef();
    this.newsletterRef = React.createRef();
    this.buttonRef = React.createRef();
    this.carRef = React.createRef();
  }

  state = {
    name: "",
    email: "",
    color: "",
    shoe: "",
    car: "",
    newsletter: false,
  };

  componentDidMount() {
    this.nameRef.current.focus();
  }

  inputChanged(e) {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value });
        this.setState({ nameValid: e.target.value.length > 2 });
        break;
      case "email":
        this.setState({ email: e.target.value });
        this.setState({
          emailValid:
            e.target.value.length > 2 && e.target.value.indexOf("@") !== -1,
        });
        break;
      case "color":
        this.setState({ color: e.target.value });
        this.setState({ colorValid: e.target.value !== "" });
        break;
      case "shoe":
        this.setState({ shoe: e.target.value });
        let shoeSize = parseInt(e.target.value);
        this.setState({
          shoeValid: !isNaN(shoeSize) && shoeSize > 23 && shoeSize < 55,
        });
        break;
      case "car":
        this.setState({ car: e.target.value });
        this.setState({ carValid: e.target.value !== "" });
        break;
      case "newsletter":
        this.setState({ newsletter: e.target.value });
        this.setState({ newsletterValid: e.target.checked });
        break;
      default:
    }
  }

  handleKeyDown(e) {
    if (e.key !== "Enter") return;
    switch (e.target.name) {
      case "name":
        this.emailRef.current.focus();
        break;
      case "email":
        this.colorRef.current.focus();
        break;
      case "shoe":
        this.carRef.current.focus();
        break;
      default:
    }
  }

  onClick(e) {
    //e.preventDefault();
    alert("Bra jobbat!");
  }

  render() {
    return (
      <>
        <form
          onChange={this.inputChanged}
          onKeyDown={this.handleKeyDown}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Label htmlFor="name">Name</Label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            ref={this.nameRef}
          />
          <br />

          {this.state.nameValid && (
            <>
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={this.state.value}
                ref={this.emailRef}
              />
              <br />
              {this.state.emailValid && (
                <>
                  <label htmlFor="color">Favourite Color</label>
                  <br />
                  <select
                    name="color"
                    value={this.state.color}
                    ref={this.colorRef}
                  >
                    <option value=""></option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                  </select>
                  <br />
                  {this.state.colorValid && (
                    <>
                      <label htmlFor="shoe">Shoe Size</label>
                      <br />
                      <input
                        type="number"
                        name="shoe"
                        value={this.state.shoe}
                        ref={this.shoeRef}
                      />
                      <br />
                      {this.state.shoeValid && (
                        <>
                          <label htmlFor="car">Favourite Car</label>
                          <br />
                          <input
                            type="radio"
                            name="car"
                            value="suzuki"
                            checked={this.state.car === "suzuki"}
                            ref={this.carRef}
                          />{" "}
                          Suzuki Samurai
                          <br />
                          <input
                            type="radio"
                            name="car"
                            value="defender"
                            checked={this.state.car === "defender"}
                          />{" "}
                          Land Rover Defender
                          <br />
                          <input
                            type="radio"
                            name="car"
                            value="volvo"
                            checked={this.state.car === "volvo"}
                            disabled
                          />{" "}
                          Volvo XC90
                          <br />
                          {this.state.carValid && (
                            <>
                              <label htmlFor="newsletter">Nyhetsbrev</label>
                              <br />
                              <input
                                type="checkbox"
                                name="newsletter"
                                checked={this.state.newsletter}
                                ref={this.newsletterRef}
                              />{" "}
                              <br />
                              {this.state.newsletterValid && (
                                <>
                                  <button
                                    onClick={this.onClick}
                                    ref={this.buttonRef}
                                  >
                                    Done!
                                  </button>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          )}
        </form>
      </>
    );
  }
}

export default DynamicForm;
