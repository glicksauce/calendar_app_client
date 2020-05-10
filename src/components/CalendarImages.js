import React, { Component } from 'react';
import Calendar from 'react-calendar'
import CalendarMonthView from './CalendarMonthView.js'
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
       let clickedDate = ($(e.target).children()[0].ariaLabel)

      this.displayImage(clickedDate)
    })
    fetch('/calendars')                                        
      .then(response => response.json())                                            
      .then(json => console.log(json))                                              
      .catch(err => console.log(err)) 
    
  }

  render(){
    return (
      <>
      
      {this.state.imageArray.map(image => {

        return (
          <div className="calendar-image">
            <img src={image}></img>
          </div>
        )
      })}
      </>
    )
  }
}

export default CalendarImages