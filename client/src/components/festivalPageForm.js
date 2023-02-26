import React, { useState, useEffect } from 'react';

// must hit SUBMIT and then refresh page 

function FestivalForm() {
    const [QueryInput, setQueryInput] = useState("");
    const [ submittedInput, setSubmittedInput ] = useState(null)
    const [data, setData] = useState([]);


    const handleSubmit = (e) => {
        e.preventDefault() 
        console.log(QueryInput) 
        console.log(data)
        setSubmittedInput(QueryInput)
        
        setQueryInput(""); 
    }

    const handleChange = (event) => {
            setQueryInput(event.target.value)
        }
    

    const apiData = () => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q= ${submittedInput} &limit=1&appid=22c381336de0f996a4083c7ecafd3174`)
        .then((res) => res.json())
        .then((data) => {  
            setData(data); 
            console.log(data); // name of input places into array
                               // console.log(QueryInput) returns name in input field  
                fetch(`https://api.seatgeek.com/2/events?lon= ${data[0].lon} &lat= ${data[0].lat} &taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM`)
                    .then(result => {
                        console.log(result.status); 
                        return result.json();
                    })
                    .then(data => {
                        console.log(data) // array of events based on name given in above api
                        setData(data)
                    })
                    .catch(error => console.log('search failed')) 
            })
    } 
 
    useEffect(() => { 
        apiData();   
        
        setSubmittedInput("") // clears text input
    }, []);  

    
      return (
        <div className="App"> 
          <header className="app-header"> 
            <div className="login-form">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <p>Location</p>
                    <input 
                      className = "name" 
                      type="text"
                      name='city'
                      value={QueryInput}
                      placeholder="Enter a city"
                      onChange={handleChange}
                    />
                    <input type="submit" value="submit" onSubmit={handleSubmit} />  
                </form>
                <section className='cards-cont'> 
                {/* {data.map(item => (
                <li key={item.id}>
                <img className='container-pic' alt='card-img' src={item.images}></img>
                        <div className='camp-name card-title'>{item.name}</div>
                        <div className='camp-sites'>Campsites Available: {it}</div>
                        <div className='camp-desc card-desc'>{item.description}</div>
                        <div className='camp-urlBtn urlBtn'><a href={item.url} className='camp-url card-url'>Go To Website</a></div>                        
                </li>
        ))} */}
                </section>
            </div>
          </header>
        </div>
      );
    }
    
    export default FestivalForm;