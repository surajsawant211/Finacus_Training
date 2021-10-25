import React, { Component } from 'react'

export class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0        //here we created a state variable called count using rconst command with constructor
        }
    }

    incrementCount =() =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <h3>Using class component</h3>
                <button onClick={this.incrementCount}>Count {this.state.count}</button>
            </div>
        )
    }
}

export default ClassCounter
