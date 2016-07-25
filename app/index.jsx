import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import {increment} from './actions'
import countStore from './stores/countStore.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: countStore.getState()
    }
    this.handleIncrement = this.handleIncrement.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  componentDidMount() {
    countStore.addListener(this.onChange)
  }

  onChange() {
    this.setState({
      count: countStore.getState()
    })
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
