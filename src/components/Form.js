import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
        super (props)

        this.state = {
            eventDescription: '',
            day: 'Monday'
        }
    }

    handleEventChange = event => {
        this.setState({
            eventDescription: event.target.value
        })
    }

    handleDayChange = event => {
        this.setState({
            day: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.eventDescription} ${this.state.day}`)
        event.preventDefault()
    }
    render() {
        return (
        <form onSubmit = {this.handleSubmit}> 
            <div>
                <label>Event Description</label>
                <textarea value = {this.state.eventDescription} 
                onChange={this.handleEventChange}/>
            </div>
            <div>
                <label>Day</label>
                <select value = {this.state.topic} onChange = {this.handleDayChange}>
                    <option value = "Monday">Monday</option>
                    <option value = "Tuesday">Tuesday</option>
                    <option value = "Wedensday">Wedensday</option>
                    <option value = "Thursday">Thursday</option>
                    <option value = "Friday">Friday</option>
                    <option value = "Saturday">Saturday</option>
                    <option value = "Sunday">Sunday</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
        )
    }
}

export default Form