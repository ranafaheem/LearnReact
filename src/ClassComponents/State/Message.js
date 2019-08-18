import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Wellcome Visitor from state'
        }
    }

    changemethod() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }
    render() {
        return (
            <div>
                <h1>Wellcome it is from state {this.state.message}</h1>
                <button onClick={() => this.changemethod()}>
                    subscribe
                </button>
            </div>

        )
    }
}

export default Message