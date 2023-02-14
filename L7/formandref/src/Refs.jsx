import React from "react";

class Refs extends React.Component {
  constructor(props) {
    super(props);
    this.inputEmail = React.createRef();
    this.inputName = React.createRef();
    this.inputEmail2 = React.createRef();

    this.state = {
      email: "",
    };

    this.onChange = this.onChange.bind(this);
  }

  btnClick = (e) => {
    e.preventDefault();
    alert("Email is: " + this.inputEmail.current.value);
    this.inputName.current.focus();
  };

  onChange(e) {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  }

  render() {
    return (
      <div className="refs">
        <form>
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" name="name" ref={this.inputName} />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="text" name="email" ref={this.inputEmail} />
          <br />
          <label htmlFor="email2">Email 2</label>
          <br />
          <input
            type="text"
            name="email2"
            value={this.state.email}
            onChange={this.onChange}
            ref={this.inputEmail2}
          />
          <br />
          <button onClick={this.btnClick}>Skicka</button>
          <br />
        </form>
      </div>
    );
  }

  componentDidMount() {
    this.inputEmail2.current.focus();
  }
}

export default Refs;
