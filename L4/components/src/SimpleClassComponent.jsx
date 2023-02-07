import React from 'react';

class SimpleClassComponent extends React.Component {
  render() {
    return (<h1>Simple Class-Component ({this.props.name})</h1>);
  }
}

export default SimpleClassComponent;