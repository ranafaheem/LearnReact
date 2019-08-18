import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()

        this.state = {
            count: 0
        }
    }

    incmethod() {
        // this.setState({
        //     count: this.state.count + 1
        // }, () => { console.log('call back value', this.state.count) })
        // console.log(this.state.count)


        // if we want to change state relaetd to previous state we pass methoed instead of object

        this.setState((prevState) => ({
            count: prevState.count + 1
        })
        )

    }

    incrimentFive() {
        this.incmethod()
        this.incmethod()
        this.incmethod()
        this.incmethod()
        this.incmethod()
    }

    render() {
        return (
            <div>
                count {this.state.count}
                <button onClick={() => this.incrimentFive()}> count one more</button>
            </div >

        )
    }
}

export default Counter
