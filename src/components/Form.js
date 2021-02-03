import React, { Component } from 'react'
//import DayOrganizer from './DayOrganizer'

export default class Form extends Component {
    
    userData;

    constructor(props) {
        super (props);

        this.handleEventChange = this.handleEventChange.bind(this);
        this.handleDayChange = this.handleDayChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            eventDescription: '',
            day: 'Monday',
            time: ''
        }
    }

    handleEventChange(event) {
        this.setState({
            eventDescription: event.target.value
        })
    }

    handleTimeChange(event) {
        this.setState({
            time: event.target.value
        })
    }

    handleDayChange(event) {
        this.setState({
            day: event.target.value
        })
    }

     // React Life Cycle
     componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                eventDescription: this.userData.eventDescription,
                day: this.userData.day,
                time: this.userData.time
            })
        } else {
            this.setState({
                eventDescription: '',
                day: 'Monday',
                time: '00:00'
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    handleSubmit(){
    }

    render() {
        return (
        <div className="container">
            <form onSubmit = {this.handleSubmit}> 
                <div>
                    <label>Event Description</label>
                    <textarea className="form-control" value = {this.state.eventDescription} 
                    onChange={this.handleEventChange}/>
                </div>
                <div>
                    <label>Day</label>
                    <select className="form-control" value = {this.state.day} onChange = {this.handleDayChange}>
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
                    <select className="form-control" value = {this.state.time} onChange = {this.handleTimeChange}>
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
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
        )
    }
}
