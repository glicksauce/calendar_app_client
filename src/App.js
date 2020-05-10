import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarGrid from './components/CalendarGrid.js'
import CalendarDisplay from './components/CalendarDisplay.js'
import Calendar from 'react-calendar'


class App extends Component {
  componentDidMount() {
  }

  handleAdd = (event, formInputs) =>{
    event.preventDefault()
    fetch('http://localhost:3000/photos',{
      body: JSON.stringify(formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdImage => console.log(createdImage.json()))
    .catch(error => console.log(error))
    }    

  render() {
    return (
      <div className="App">
        <CalendarGrid 
          handleSubmit={this.handleAdd}
        />
      </div>
    );
  }
}

export default App;
