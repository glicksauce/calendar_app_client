import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalendarGrid from './components/CalendarGrid.js'
import CalendarDisplay from './components/CalendarDisplay.js'
import Calendar from 'react-calendar'


class App extends Component {
  componentDidMount() {
  }

  handleAdd = async (event, formInputs) =>{

    // let obj;
      event.preventDefault()
      return await Promise.resolve(fetch('http://localhost:3000/photos',{
        body: JSON.stringify(formInputs),
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
      .then(res => (res.json()))
      // .then(data => obj = data)
      // .then(() => console.log(obj))
      .catch(error => console.log(error))
      )}

      handleUpdate = async (event, formInputs, photo_id) =>{

      // let obj;
        event.preventDefault()
        return await Promise.resolve(fetch('http://localhost:3000/photos/' + photo_id,{
          body: JSON.stringify(formInputs),
          method: 'PUT',
          headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          }
        })
        .then(res => (res.json()))
        .then(obj => console.log(obj))
        .catch(error => console.log(error))
        )}      

  deletePhoto = (photoID) =>{
    fetch('http://localhost:3000/photos/' + photoID ,{
        method: 'DELETE',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        }
      })
  }

  render() {
    return (
      <div className="App">
        <CalendarGrid 
          handleSubmit={this.handleAdd}
          handleUpdate={this.handleUpdate}
          deletePhoto={this.deletePhoto}
        />
      </div>
    );
  }
}

export default App;
