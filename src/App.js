import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DayOrganizer from './components/DayOrganizer';
import Login from './components/Login'
import Logout from  './components/Logout'
import Calendar from './components/Calendar';

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState()
    const [googleObj, setGoogleObj] = useState()
    
    return (
        <div className="App">
          <div style={{}}>
            <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
            {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
            <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
          </div>
          <Calendar />
          <Form googleObj = {googleObj}/>
        </div>
        
      );
      
}

export default App;
