import React, { Component } from 'react';
import Calendar from 'react-calendar'

class CalendarGrid extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  componentDidMount () {
     this.getData()
  }
  getData = () => {
    fetch('/calendar/1')
      .then(response => response.json())
  }

  render () {
   
    return (
      <>
        <h1>Calendar</h1>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        <div className='img-display'>
          image goes here
        </div>
      </>
    )
  }
}

export default CalendarGrid