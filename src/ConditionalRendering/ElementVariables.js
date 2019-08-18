import React, { Component } from 'react'

export class ElementVariables extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        let message
        if (this.state.isLoggedIn) {
            message = <div>Wellcome Rana Faheem</div>
        }
        else {
            message = <div> Wellcome guest </div>
        }

        return (
            <div> {message}</div>
        )
    }
}


export default ElementVariables
