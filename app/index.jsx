import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {increment} from './actions'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
    this.handleIncrement = this.handleIncrement.bind(this)
  }

  handleIncrement() {
    increment()
    /*
    this.setState({
      count: this.state.count + 1
    })
    */
  }

  render(){
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
