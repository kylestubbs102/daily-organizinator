import React, { Component } from 'react'
import './App.css';
import Form from './components/Form';
import DayOrganizer from './components/DayOrganizer';

class App extends Component {
  render(){
    return (
        <div className="App">
            <DayOrganizer />
        </div>
      )
  }
}

export default App;
