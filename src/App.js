import React, { Component, useState } from 'react'
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DayOrganizer from './components/DayOrganizer';
import Login from './components/Login'
import Logout from  './components/Logout'

class App extends Component {
  const [loggedIn, setLoggedIn] = useState(false)
  const [name, setName] = useState()

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
