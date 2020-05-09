import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarGrid from './components/CalendarGrid.js'
import Calendar from 'react-calendar'


class App extends Component {
  componentDidMount() {
    fetch('/calendars')                                        
      .then(response => response.json())                                            
      .then(json => console.log(json))                                              
      .catch(err => console.log(err))  
  }

  render() {
    return (
      <div className="App">
        <CalendarGrid />
      </div>
    );
  }
}

export default App;
