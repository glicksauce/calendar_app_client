import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

class App extends Component {
  componentDidMount() {
    fetch('/calendars')                                        
      .then(response => response.json())                                            
      .then(json => console.log(json))                                              
      .catch(err => console.log(err))  
  }

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new Calendar(calendarEl, {
      plugins: [ dayGridPlugin ]
    });
  
    calendar.render();
  });

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
