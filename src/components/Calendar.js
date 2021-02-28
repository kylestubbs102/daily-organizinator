import React, { useState, useEffect } from 'react'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import database from '../firebase'
import * as $ from 'jquery'

import './Calendar.css'


function Calendar (props) {

  const [calendarEvents, setCalendarEvents] = useState([])
  useEffect (() =>
    database.ref(`/users/${props.googleObj.googleId}/events`).on("value", (snapshot) => {
      if (snapshot) {
          console.log(snapshot.val())
          let myEvents = []
          //var currentDate = $('#calendar').fullCalendar('getDate');
          //var currentMonth = currentDate.getMonth();
          snapshot.forEach( data => {
            var date1String = 'February 27, 2021 ' + data.val().startTime
            var date2String = 'February 27, 2021 ' + data.val().endTime
            console.log(date1String)
            console.log(date2String)
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