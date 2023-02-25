import React, { useState, useEffect } from 'react';

function FestivalForm() {
    const [QueryInput, setQueryInput] = useState("")
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    // const dataFetch = (QueryInput) => {
    //     fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + QueryInput + "&limit=1&appid=22c381336de0f996a4083c7ecafd3174")
    //         .then(res => {
    //             console.log(res.status)
    //             return res.json()
    //         })
    //         .then((result) => {
    //             setIsLoaded(true);
    //             setData(result.data);
    //             console.log(data)
    //                 fetch('https://api.seatgeek.com/2/events?' + 'lon=' + data[0].lon+ '&' + 'lat=' + data[0].lat +  '&taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM')
    //                     .then(result => {
    //                         console.log(result.status);
    //                         return result.json();
    //                     })
    //                     .then(data => {
    //                         console.log(data)
    //                     })
    //                     .catch(error => console.log('search failed')) 
    //             })
    //     }
            

    useEffect(() => {
        fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + QueryInput + "&limit=1&appid=22c381336de0f996a4083c7ecafd3174")
            .then((res) => res.json())
            .then((data) => {
                setIsLoaded(true);
                setData(data);
                console.log(data)
                    fetch('https://api.seatgeek.com/2/events?' + 'lon=' + data[0].lon + '&' + 'lat=' + data[0].lat +  '&taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM')
                        .then(result => {
                            console.log(result.status);
                            return result.json();
                        })
                        .then(data => {
                            console.log(data)
                        })
                        .catch(error => console.log('search failed')) 
                })
    }, [])

    
      const handleSubmit = (e) => {
          e.preventDefault();
          console.log(QueryInput)
          console.log(data)
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
                      value={QueryInput}
                      placeholder="Enter a city"
                      onChange={(e) => {setQueryInput(e.target.value)}}
                    />
    
                    <p>Desired Venue</p>
    
                    <input 
                      className = "Place"
                      type="text"
                      placeholder = "Enter a venue" 
                      onChange={(e) => {setQueryInput(e.target.value)}}
                    />
    
                    <button type="submit">Submit</button>
                </form>
            </div>
          </header>
        </div>
      );
    }
    
    export default FestivalForm;