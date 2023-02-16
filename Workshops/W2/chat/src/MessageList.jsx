function MessageList(props) {
  return (
    <div className="MessageList">
      <h2>Chat-history</h2>
      <ul>
        {props.messages &&
          props.messages.map((e, i, a) => {
            return (
              <li key={i}>
                {e.user}: {e.text}
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default MessageList;
