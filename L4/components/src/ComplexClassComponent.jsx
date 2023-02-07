import React from 'react';

class ComplexClassComponent extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { counter: 0 };

        this.addOne = this.addOne.bind(this);       // Bind denna instansen av ComplexComponent till denna addOne-metoden -- annars kommer inte eventhandlers / callbacks att fungera
    }

    state = {  }

    addOne() {
        this.props.onClick("new counter: " + this.state.counter + 1);
        this.setState({
            counter: this.state.counter + 1
        });
    }
    
    render() { 
        return ( 
            <>
                <h1>This is a "{ this.props.name }" complex component ({ this.state.counter })!</h1>
                <button onClick={this.addOne}>Add 1</button>
            </>
        );
    }

}
 
export default ComplexClassComponent;