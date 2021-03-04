//import React, { Component } from 'react'
//import DayOrganizer from './DayOrganizer'
import React, { useState } from 'react'

import database from '../firebase'
import DatePicker from 'react-datepicker';
 
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Form (props) {
    
    const [eventDescription, setEventDescription] = useState('')
    const [day, setDay] = useState(new Date())
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')

    const handleEventChange = (event) => {
        setEventDescription(event.target.value);
    }

    const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);
    }

    const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);
    }

    const handleDayChange = (event) => {
        setDay(event);
    }

    const saveToDb = () => {
        database.ref(`/users/${props.googleObj.googleId}/events`).push(
            {
                eventDescription: eventDescription,
                day: String(day),
                startTime: startTime,
                endTime: endTime
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
                    <div>
                        <DatePicker
                            selected={ day }
                            onChange={ handleDayChange }
                            name="day"
                            dateFormat="MM/dd/yyyy"
                        />
                    </div>
                </div>
                <div>
                    <label>Start Time</label>
                    <select className="form-control" value = {startTime} onChange = {handleStartTimeChange}>
                        <option value = "00:00:00">12:00am</option>
                        <option value = "00:30:00">12:30am</option>
                        <option value = "01:00:00">1:00am</option>
                        <option value = "01:30:00">1:30am</option>
                        <option value = "02:00:00">2:00am</option>
                        <option value = "02:30:00">2:30am</option>
                        <option value = "03:00:00">3:00am</option>
                        <option value = "03:30:00">3:30am</option>
                        <option value = "04:00:00">4:00am</option>
                        <option value = "04:30:00">4:30am</option>
                        <option value = "05:00:00">5:00am</option>
                        <option value = "05:30:00">5:30am</option>
                        <option value = "06:00:00">6:00am</option>
                        <option value = "06:30:00">6:30am</option>
                        <option value = "07:00:00">7:00am</option>
                        <option value = "07:30:00">7:30am</option>
                        <option value = "08:00:00">8:00am</option>
                        <option value = "08:30:00">8:30am</option>
                        <option value = "09:00:00">9:00am</option>
                        <option value = "09:30:00">9:30am</option>
                        <option value = "10:00:00">10:00am</option>
                        <option value = "10:30:00">10:30am</option>
                        <option value = "11:00:00">11:00am</option>
                        <option value = "11:30:00">11:30am</option>
                        <option value = "12:00:00">12:00pm</option>
                        <option value = "12:30:00">12:30pm</option>
                        <option value = "13:00:00">1:00pm</option>
                        <option value = "13:30:00">1:30pm</option>
                        <option value = "14:00:00">2:00pm</option>
                        <option value = "14:30:00">2:30pm</option>
                        <option value = "15:00:00">3:00pm</option>
                        <option value = "15:30:00">3:30pm</option>
                        <option value = "16:00:00">4:00pm</option>
                        <option value = "16:30:00">4:30pm</option>
                        <option value = "17:00:00">5:00pm</option>
                        <option value = "17:30:00">5:30pm</option>
                        <option value = "18:00:00">6:00pm</option>
                        <option value = "18:30:00">6:30pm</option>
                        <option value = "19:00:00">7:00pm</option>
                        <option value = "19:30:00">7:30pm</option>
                        <option value = "20:00:00">8:00pm</option>
                        <option value = "20:30:00">8:30pm</option>
                        <option value = "21:00:00">9:00pm</option>
                        <option value = "21:30:00">9:30pm</option>
                        <option value = "22:00:00">10:00pm</option>
                        <option value = "22:30:00">10:30pm</option>
                        <option value = "23:00:00">11:00pm</option>
                        <option value = "23:30:00">11:30pm</option>
                    </select>
                </div>
                <div>
                    <label>End Time</label>
                    <select className="form-control" value = {endTime} onChange = {handleEndTimeChange}>
                        <option value = "00:00:00">12:00am</option>
                        <option value = "00:30:00">12:30am</option>
                        <option value = "01:00:00">1:00am</option>
                        <option value = "01:30:00">1:30am</option>
                        <option value = "02:00:00">2:00am</option>
                        <option value = "02:30:00">2:30am</option>
                        <option value = "03:00:00">3:00am</option>
                        <option value = "03:30:00">3:30am</option>
                        <option value = "04:00:00">4:00am</option>
                        <option value = "04:30:00">4:30am</option>
                        <option value = "05:00:00">5:00am</option>
                        <option value = "05:30:00">5:30am</option>
                        <option value = "06:00:00">6:00am</option>
                        <option value = "06:30:00">6:30am</option>
                        <option value = "07:00:00">7:00am</option>
                        <option value = "07:30:00">7:30am</option>
                        <option value = "08:00:00">8:00am</option>
                        <option value = "08:30:00">8:30am</option>
                        <option value = "09:00:00">9:00am</option>
                        <option value = "09:30:00">9:30am</option>
                        <option value = "10:00:00">10:00am</option>
                        <option value = "10:30:00">10:30am</option>
                        <option value = "11:00:00">11:00am</option>
                        <option value = "11:30:00">11:30am</option>
                        <option value = "12:00:00">12:00pm</option>
                        <option value = "12:30:00">12:30pm</option>
                        <option value = "13:00:00">1:00pm</option>
                        <option value = "13:30:00">1:30pm</option>
                        <option value = "14:00:00">2:00pm</option>
                        <option value = "14:30:00">2:30pm</option>
                        <option value = "15:00:00">3:00pm</option>
                        <option value = "15:30:00">3:30pm</option>
                        <option value = "16:00:00">4:00pm</option>
                        <option value = "16:30:00">4:30pm</option>
                        <option value = "17:00:00">5:00pm</option>
                        <option value = "17:30:00">5:30pm</option>
                        <option value = "18:00:00">6:00pm</option>
                        <option value = "18:30:00">6:30pm</option>
                        <option value = "19:00:00">7:00pm</option>
                        <option value = "19:30:00">7:30pm</option>
                        <option value = "20:00:00">8:00pm</option>
                        <option value = "20:30:00">8:30pm</option>
                        <option value = "21:00:00">9:00pm</option>
                        <option value = "21:30:00">9:30pm</option>
                        <option value = "22:00:00">10:00pm</option>
                        <option value = "22:30:00">10:30pm</option>
                        <option value = "23:00:00">11:00pm</option>
                        <option value = "23:30:00">11:30pm</option>
                    </select>
                </div>
            </form>
            <button onClick={() => saveToDb()}>Submit</button>
        </div>
        )
    
}

export default Form