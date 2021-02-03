import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DayOrganizer from './components/DayOrganizer';

class App extends Component {
  render(){
    return (
        <div className="App">
            <Form />
            <DayOrganizer />
        </div>
      )
  }
}

export default App;