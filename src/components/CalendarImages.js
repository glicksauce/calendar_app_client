import React, { Component } from 'react';
import Calendar from 'react-calendar'
import CalendarForm from './CalendarForm.js'
import * as $ from 'jquery'
import CalendarDisplay from './CalendarDisplay.js'
import { render } from '@testing-library/react';


class CalendarImages extends Component {
  
  state = {
    imageArray: [],
    photoArray: []
  }

  addImagesToState = imageArray =>{
    let images = imageArray.map(x => x.img_src)
    this.setState({
      imageArray: images,
      photoArray: imageArray

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

  addedImage = (img_src, image) =>{
    let newImages = this.state.imageArray
    newImages.push(img_src)
    let newPhotos = this.state.photoArray
    newPhotos.push(image)
    this.setState({
        imageArray: newImages,
        photoArray: newPhotos
    })
  }

  deleteImage = (imageIndex) =>{
    console.log("delete clicked" + imageIndex)

    //remove image from state
    let refreshedImages = this.state.imageArray
    let refreshedPhotos = this.state.photoArray
    refreshedImages.splice(imageIndex,1)
    refreshedPhotos.splice(imageIndex,1)
    // console.log(refreshedImages)
    this.setState({
      imageArray: refreshedImages,
      photoArray: refreshedPhotos
    })

    //remove image from DB
    // this.props.deleteImage
  }

  componentDidMount() {
    
    $('.react-calendar__tile').click((e)=>{
      //sometimes this will be undefined if browser is slow or something
      if (e != undefined) {
        console.log($(e.target).children())
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
      {this.state.photoArray.map((image,index) => {

        return (
          <div className="calendar-image" key={index}>
            <img src={image.img_src}></img>
            <div className="delete-button" onClick={()=>this.deleteImage(index)} id={image.id}>X</div>
          </div>
        )
      })}
      <CalendarForm 
        selectedDate = {this.props.selectedDate}
        handleSubmit={this.props.handleSubmit}
        addedImage={this.addedImage}
      />
      </>
    )
  }
}

export default CalendarImages