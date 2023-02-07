import { useState } from "react";

function ComplexFunctionComponent(props) {

    const [counter, setCounter] = useState(0);
    
    let addOne = function() {
        props.onMessage("The new counter is: " + (counter +1));
        setCounter(counter+1);
    }

    return (
        <>
            <h1>This is a ({ props.name }) complex function component. ({ counter })</h1>
            <button onClick={addOne}>Add 1</button>
        </>
    );
}

export default ComplexFunctionComponent;