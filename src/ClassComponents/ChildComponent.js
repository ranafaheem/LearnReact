import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <h3>this is a child functional component</h3>
            {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
            <button onClick={() => props.greetHandler('Child is Faheem')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
