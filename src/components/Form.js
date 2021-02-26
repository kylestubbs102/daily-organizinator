//import React, { Component } from 'react'
//import DayOrganizer from './DayOrganizer'
import React, { useState } from 'react'

import database from '../firebase'

function Form (props) {
    
    const [eventDescription, setEventDescription] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')

    const handleEventChange = (event) => {
        setEventDescription(event.target.value);
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
    }

    const handleDayChange = (event) => {
        setDay(event.target.value);
    }

    const saveToDb = () => {
        console.log(props.googleObj.googleId)
        database.ref(`/users/${props.googleObj.googleId}/events`).push(
            {
                eventDescription: eventDescription,
                day: day,
                time: time
            }
        )
    }

    return (
        <div className="container">
            <form> 
                <div>
                    <label>Event Description</label>
                    <textarea className="form-control" value = {eventDescription} 
                    onChange={handleEventChange}/>
                </div>
                <div>
                    <label>Day</label>
                    <select className="form-control" value = {day} onChange = {handleDayChange}>
                        <option value = "Monday">Monday</option>
                        <option value = "Tuesday">Tuesday</option>
                        <option value = "Wedensday">Wedensday</option>
                        <option value = "Thursday">Thursday</option>
                        <option value = "Friday">Friday</option>
                        <option value = "Saturday">Saturday</option>
                        <option value = "Sunday">Sunday</option>
                    </select>
                </div>
                <div>
                    <label>Time</label>
                    <select className="form-control" value = {time} onChange = {handleTimeChange}>
                        <option value = "00:00">12:00am</option>
                        <option value = "00:30">12:30am</option>
                        <option value = "01:00">1:00am</option>
                        <option value = "01:30">1:30am</option>
                        <option value = "02:00">2:00am</option>
                        <option value = "02:30">2:30am</option>
                        <option value = "03:00">3:00am</option>
                        <option value = "03:30">3:30am</option>
                        <option value = "04:00">4:00am</option>
                        <option value = "04:30">4:30am</option>
                        <option value = "05:00">5:00am</option>
                        <option value = "05:30">5:30am</option>
                        <option value = "06:00">6:00am</option>
                        <option value = "06:30">6:30am</option>
                        <option value = "07:00">7:00am</option>
                        <option value = "07:30">7:30am</option>
                        <option value = "08:00">8:00am</option>
                        <option value = "08:30">8:30am</option>
                        <option value = "09:00">9:00am</option>
                        <option value = "09:30">9:30am</option>
                        <option value = "10:00">10:00am</option>
                        <option value = "10:30">10:30am</option>
                        <option value = "11:00">11:00am</option>
                        <option value = "11:30">11:30am</option>
                        <option value = "12:00">12:00pm</option>
                        <option value = "12:30">12:30pm</option>
                        <option value = "13:00">1:00pm</option>
                        <option value = "13:30">1:30pm</option>
                        <option value = "14:00">2:00pm</option>
                        <option value = "14:30">2:30pm</option>
                        <option value = "15:00">3:00pm</option>
                        <option value = "15:30">3:30pm</option>
                        <option value = "16:00">4:00pm</option>
                        <option value = "16:30">4:30pm</option>
                        <option value = "17:00">5:00pm</option>
                        <option value = "17:30">5:30pm</option>
                        <option value = "18:00">6:00pm</option>
                        <option value = "18:30">6:30pm</option>
                        <option value = "19:00">7:00pm</option>
                        <option value = "19:30">7:30pm</option>
                        <option value = "20:00">8:00pm</option>
                        <option value = "20:30">8:30pm</option>
                        <option value = "21:00">9:00pm</option>
                        <option value = "21:30">9:30pm</option>
                        <option value = "22:00">10:00pm</option>
                        <option value = "22:30">10:30pm</option>
                        <option value = "23:00">11:00pm</option>
                        <option value = "23:30">11:30pm</option>
                    </select>
                </div>
            </form>
            <button onClick={() => saveToDb()}>Submit</button>
        </div>
        )
    
}

export default Form