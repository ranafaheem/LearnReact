import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponnet extends Component {
    constructor(props) {
        super()

        this.state = {
            parentName: "Parent Name"
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent = (childName) => {
        alert(`HEllo  ${this.state.parentName} , this is from the child Component ${childName}`)
    }
    render() {
        return (
            <div>
                {/* < button onClick={this.greetParent}>Parent Data </button> */}
                <ChildComponent greetHandler={this.greetParent}></ChildComponent>
            </div>
        )
    }
}

export default ParentComponnet
