import React, {  useState } from 'react'
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

    
    return (
        <div className="App">
            <Calendar />
            <Form />
            <DayOrganizer />
          <div style={{}}>
          <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)}/>
          {loggedIn ? <p>Hello {name}</p>: <p>Not logged in</p> }
          <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)}/>
          </div>
        </div>
        
      );
      
}

export default App;
