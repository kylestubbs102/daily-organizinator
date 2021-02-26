import React, {Component} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import './Calendar.css'

class Calendar extends Component {

  state = {
    calendarEvents: [
      { title: 'Event Now', start: new Date() }
    ]
  }

  render() {
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
            events={this.state.calendarEvents}
            dateClick={this.handleDateClick}
        />
      </div>
    );
  }

  handleDateClick = (arg) => {
    this.setState({
      calendarEvents: this.state.calendarEvents.concat({
        title: arg.startTime,
        start: arg.date,
        end: arg.date,
        startTime: arg.startTime,
        endTime: arg.endTime
      })
    })
  }

}

export default Calendar;