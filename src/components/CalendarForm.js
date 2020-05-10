import React, { Component } from 'react';
import Calendar from 'react-calendar'

import * as $ from 'jquery'
import CalendarDisplay from './CalendarDisplay.js'
import { render } from '@testing-library/react';


class CalendarForm extends Component {
  
  state = {
    img_src: "",
    img_date: "",
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

  onTileClick = () =>{
    //set brief timout so props is updated with correct data
    setTimeout(() => {
        let formattedDate = this.props.selectedDate
        .toISOString()
        .toString()
        .substring(0,10)
        this.setState({
            img_date: formattedDate
        })
    },200)
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
    this.onTileClick()
    
    $('.react-calendar__tile').click(this.onTileClick)

  }

  handleChange = (event) => {
    console.log(event.target.id, event.target.value)
    this.setState({[event.target.id] : event.target.value})
}

handleSubmit =(event) => {
    event.preventDefault()
    const imageToAdd = {
      img_date: this.state.img_date,
      img_src: this.state.img_src,
    }

    this.props.handleSubmit(event, imageToAdd)
}

  render() {

    return (
      <>
      <h3>Add Images</h3>
        <form onSubmit={this.handleSubmit}>
            <input 
                type="text"
                id="img_date"
                name="img_date"
                placeholder="image date"
                value={this.state.img_date}
                onChange={this.handleChange}
            />
            <input 
                type="text"
                id="img_src"
                name="img_src"
                placeholder="image source"
                value={this.state.img_src}
                onChange={this.handleChange}
            />
            <input
                type="submit"
            />
        </form>
        </>
    )
  }
}

export default CalendarForm