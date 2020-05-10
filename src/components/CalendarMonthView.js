import React, { Component } from 'react';
import MonthView from 'react-calendar'
import * as $ from 'jquery'
import CalendarDisplay from './CalendarDisplay.js'


class CalendarMonthView extends MonthView {
  render(){
    let injectedProps = {}

    injectedProps.onMouseOver = ()=> {
      console.log("hi")
    }


    return (
      <>
        <MonthView {...this.props} {...injectedProps} />
      </>
    )
  }
}
export default CalendarMonthView