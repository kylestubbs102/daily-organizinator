import React, { useState, useEffect } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import database from '../firebase'


import './Calendar.css'

function Calendar (props) {

  const [calendarEvents, setCalendarEvents] = useState([])

  useEffect (() =>
    database.ref(`/users/${props.googleObj.googleId}/events`).on("value", (snapshot) => {
      if (snapshot) {
          let myEvents = []
          snapshot.forEach( data => {
            var dayString = data.val().day.substring(4, 16)
            var date1String = dayString + data.val().startTime
            var date2String = dayString + data.val().endTime
            var date1 = new Date(date1String)
            var date2 = new Date(date2String)
              let event = {
                  title: data.val().eventDescription,
                  start: date1,
                  end: date2
              }
              myEvents.push(event) 
          }) 
          setCalendarEvents(calendarEvents.concat(myEvents))
      }
  })
,[])


  return (
    <div id='container'>
      <FullCalendar 
          defaultView="dayGridMonth"
          allDaySlot={false}
          expandRows={true}
          header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
          }}
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView="timeGridWeek"
          events={calendarEvents}
      />
    </div>
  )

}

export default Calendar;