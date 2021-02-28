import React, {Component} from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import './Calendar.css'

class Calendar extends Component {

  state = {
    calendarEvents: [
      { title: 'Event Title', start: null }
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
    var date1 = new Date('February 27, 2021 16:24:00')
    var date2 = new Date('February 27, 2021 18:24:00')
    console.log(arg.date)
    this.setState({
      calendarEvents: this.state.calendarEvents.concat({
        // title: arg.startTime,
        title: 'Title',
        start: date1,
        end: date2,
      })
    })
  }

}

export default Calendar;