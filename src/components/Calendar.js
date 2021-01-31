import React, {Component} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import './Calendar.css'

class Calendar extends Component {

  render() {
    return (
      <div id='container'>
        <FullCalendar 
            defaultView="dayGridMonth"
            allDaySlot={false}
            header={{
            left: "prev,next",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay"
            }}
            plugins={[ dayGridPlugin, timeGridPlugin ]}
            initialView="timeGridWeek"
        />
      </div>
    );
  }
}

export default Calendar;