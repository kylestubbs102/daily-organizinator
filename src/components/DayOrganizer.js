import React, { Component } from 'react'
import Form from './Form';

class DayOganizer extends Component {
    
    constructor(props) {
        super (props)

        this.state = {
            eventDescription: '',
            day: 'Monday'
        }
    }
    render() {
        return (
         <div>
             <Form />;
            Day Organizer
         </div>
        )
    }
}

export default DayOganizer