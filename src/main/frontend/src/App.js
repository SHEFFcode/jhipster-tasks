import React, { Component } from 'react'
import Task from './components/tasks/task'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Task />
      </div>
    )
  }
}

export default App
