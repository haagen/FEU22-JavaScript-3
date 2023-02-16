import React from "react";

class ChatBox extends React.Component {
  constructor(props) {
    super(props);
    this.onMessageChanged = this.onMessageChanged.bind(this);
    this.onSendMessageClick = this.onSendMessageClick.bind(this);
  }

  state = { message: "" };

  onMessageChanged(e) {
    this.setState({
      message: e.target.value,
    });
  }

  onSendMessageClick(e) {
    this.props.onMessage(this.props.name, this.state.message);
    this.setState({
      message: "",
    });
  }

  render() {
    return (
      <div className="chatBox">
        <h2>{this.props.name}</h2>
        <label htmlFor="message">Meddelande</label>
        <br />
        <textarea
          name="message"
          value={this.state.message}
          onChange={this.onMessageChanged}
        ></textarea>
        <br />
        <button onClick={this.onSendMessageClick}>Skicka Meddelande</button>
      </div>
    );
  }
}

export default ChatBox;
