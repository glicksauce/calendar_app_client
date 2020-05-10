import React, { Component } from 'react';
import Calendar from 'react-calendar'
import CalendarForm from './CalendarForm.js'
import * as $ from 'jquery'
import CalendarDisplay from './CalendarDisplay.js'
import { render } from '@testing-library/react';


class CalendarImages extends Component {
  
  state = {
    imageArray: []
  }

  addImagesToState = imageArray =>{
    let images = imageArray.map(x => x.img_src)
    this.setState({
      imageArray: images

    })
  }

  onMouseOver = () =>{
    console.log("hi")
  }

  displayImage = (date) =>{
    //converts date before calling fetch
    const stateDateFormatted = new Date(date)
    .toISOString()
    .toString()
    .substring(0,10)
    
    console.log("clicked date is", stateDateFormatted)
    fetch('/calendars/' + stateDateFormatted)                                        
    .then(response => response.json())                                            
    .then(json => {
      console.log("fetch results: ", json)
      if (json.photos) {
        this.addImagesToState(json.photos)
      }
    })                                              
    .catch(err => console.log(err)) 
  }

  componentDidMount() {
    
    $('.react-calendar__tile').click((e)=>{
      //sometimes this will be undefined if browser is slow or something
      if ($(e.target) != undefined) {
        let clickedDate = ($(e.target).children()[0].ariaLabel)
        this.displayImage(clickedDate)
      }
    })
    fetch('/calendars')                                        
      .then(response => response.json())                                            
      .then(json => console.log(json))                                              
      .catch(err => console.log(err)) 
    
  }

  render() {

    return (
      <>
      <h2>{this.props.selectedDateFormatted}</h2>
      {this.state.imageArray.map(image => {

        return (
          <div className="calendar-image">
            <img src={image}></img>
          </div>
        )
      })}
      <CalendarForm 
        selectedDate = {this.props.selectedDate}
        handleSubmit={this.props.handleSubmit}
      />
      </>
    )
  }
}

export default CalendarImages