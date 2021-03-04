import React, { useState } from 'react'
import './App.css';
import Form from './components/Form';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login'
import Logout from  './components/Logout'
import Calendar from './components/Calendar';
import './components/Popup.css'
import './components/OAuth.css'
import database from './firebase'

function App() {

    const [loggedIn, setLoggedIn] = useState(false)
    const [name, setName] = useState()
    const [googleObj, setGoogleObj] = useState()
    const [showPopup, setShowPopup] = useState(false)

    const deleteDb = () => {
      database.ref(`/users/${googleObj.googleId}/events`).remove()
    } 
    
    return (
        <div className="App">
          <div style={{}} className="oAuth">
            {loggedIn ? 
              <div>
                <h1>Hello {name}</h1>
                <div className="oAuth-button">
                  <Logout loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
                </div>
              </div>
            : <div>
            <h1>Not Logged In</h1>
            <div className="oAuth-button">
              <Login loggedIn={loggedIn} setLoggedIn = {(bool) => setLoggedIn(bool)} setName={(name) => setName(name)} setGoogleObj={(obj) => setGoogleObj(obj)}/>
            </div>
            </div> }
          </div>
          <button className="event-button" onClick={() => setShowPopup(true)}>Add Event</button>
          <button className="clear-button" onClick={() => deleteDb()}>Clear Events</button>
          {googleObj ? 
            <div className="calendar">
              <Calendar googleObj = {googleObj}/>
            </div>
          :null}
          {showPopup ? 
            <div className="popup">
              <div className="popup-inner">
                <button className="close-btn" onClick={() => setShowPopup(false)}>close</button>
                <Form googleObj = {googleObj} setShow = {showPopup}/>
              </div>
            </div>
          :null}
        </div>
        
        
      );
      
}

export default App;
