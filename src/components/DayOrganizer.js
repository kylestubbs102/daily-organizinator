import React, { Component } from 'react'

export default class DayOrganizer extends Component {
    userData;

    constructor(props) {
        super (props);

        this.state = {
            eventDescriptions: [],
            day: '',
            times: []
        }
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                eventDescriptions: this.state.eventDescriptions.concat(this.userData.eventDescription),
                day: this.userData.day,
                times: this.state.times.concat(this.userData.time)
            })
        } 
    }

    render() {
        return (
        <div className = "container"> 
            <h1>{this.state.eventDescriptions}</h1>
            <h1>{this.state.day}</h1>
            <h1>{this.state.times}</h1>
        </div>
        )
    }
}