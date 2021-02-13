import React, { Component, useState } from 'react'
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DayOrganizer from './components/DayOrganizer';
import Login from './components/Login'
import Logout from  './components/Logout'

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      name: ""
      
    }
  }
  render(){
    
    return (
        <div className="App">
            <Form />
            <DayOrganizer />
            <div style={{}}>
        <Login loggedIn={this.loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
        {this.loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
        <Logout loggedIn={this.loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
      </div>
        </div>
        
      );
      
  }
}

export default App;
