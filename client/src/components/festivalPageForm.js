import React, { useState } from 'react';
import Axios from 'axios';

function FestivalForm() {
      const [city, setName] = useState("")
      const [venue, setRole] = useState("")
    
      const handleSubmit = (e) => {
          e.preventDefault();
    
          Axios.post('http://localhost:3000/insert', {
              city: city,
              venue: venue
          })
      }
    
      return (
        <div className="App">
          <header className="app-header"> 
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <p>Location</p>
    
                    <input
                      className = "name" 
                      type="text"
                      placeholder="Enter a city"
                      onChange={(e) => {setName(e.target.value)}}
                    />
    
                    <p>Desired Venue</p>
    
                    <input 
                      className = "Place"
                      type="text"
                      placeholder = "Enter a venue" 
                      onChange={(e) => {setRole(e.target.value)}}
                    />
    
                    <button type="submit">Submit</button>
                </form>
            </div>
          </header>
        </div>
      );
    }
    
    export default FestivalForm;