import React, { useState, useEffect } from 'react';
import  pic1  from "../assets/pictures/concPic1.jpg"
// import  pic2  from "../assets/pictures/concPic2.jpg"
// import  pic3  from "../assets/pictures/concPic3.jpg"
// import  pic4  from "../assets/pictures/concPic4.jpg"
// import  pic5  from "../assets/pictures/concPic5.jpg"
// import  pic6  from "../assets/pictures/concPic6.jpg"
// import  pic7  from "../assets/pictures/concPic7.jpg"
// import  pic8  from "../assets/pictures/concPic8.jpg"
// import  pic9  from "../assets/pictures/concPic9.jpg"
// import  pic10  from "../assets/pictures/concPic10.jpg"


function FestivalForm() {


    const [ QueryInput, setQueryInput ] = useState("");
    const [ data, setData ] = useState([]);
    const [ pictures, setPictures ] = useState([]);
    // let picArr = [{pic1},{pic2},{pic3},{pic4},{pic5},{pic6},{pic7},{pic8},{pic9},{pic10}]

    const apiData = () => {
        fetch(`https://api.openweathermap.org/geo/1.0/direct?q= ${QueryInput} &limit=1&appid=22c381336de0f996a4083c7ecafd3174`)
        .then((res) => res.json())
        .then((cityCoord) => {  
            setData(cityCoord); 
            console.log(cityCoord[0]); // name of input places into array
                               // console.log(QueryInput) returns name in input field  
                fetch(`https://api.seatgeek.com/2/events?lon= ${cityCoord[0].lon} &lat= ${cityCoord[0].lat} &taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM`)
                    .then(result => {
                        console.log(result.status); 
                        return result.json();
                    })
                    .then(data => {
                        console.log(data.events[0].performers[0].image); // array of events based on name given in above api
                        console.log(data.events)
                        setData(data.events);
                        {data?.events?.map((performer, i) => {
                            return performer.performers.map((image, i) => {
                                console.log(image)  
                                return setPictures(image)      
                                       
                                })
                            }
                        )};
                        
                    })
                    .catch(error => console.log('search failed')) 
            })
            
    } 

        

    const handleSubmit = (e) => {  
        e.preventDefault() 
        apiData(e);
        console.log(pictures.image[e])
        console.log(pictures[e])
        console.log(QueryInput) 
        setQueryInput(""); 
    }
    
    const handleChange = (event) => {
            setQueryInput(event.target.value)
    }

    const apiLoop = () => {
        console.log(pictures)
    };
    apiLoop();

    // console.log(data)   returns data.events AFTER third scan through
      return (
        <div className="App"> 
          <header className="app-header"> 
            <div className="login-form">
                <form onSubmit={(e) => {handleSubmit(e)}}>
                    <input 
                      className = "search-bar" 
                      type="text"
                      name='city'
                      value={QueryInput}
                      placeholder="Enter a city"
                      onChange={handleChange}
                    />
                    <input className='concert-srch-btn' type="submit" value="Search" onSubmit={handleSubmit} />  
                </form>
                <section className='cards-cont'> 
                {data.map(item => [
                <li className='card-body' key={item.id}>
                    <img key={1} className='c-card concert-img' alt='card-img' src={pictures.image} />
                    <div key={2} className='c-card concert-title'>{item.title}</div>
                    {/* <div key={3} className='concert-perf'>{item.venue.display_address}</div>  */}
                    {data?.events?.map((performer, i) => {
                        return performer.performers.map((image, i) => {
                            return <img src={image} alt=""/>;
                        });
                        })}
                    <div key={3} className='c-card concert-time'>{item.datetime_local}</div>
                    <div key={4} className='c-card concert-status'>Status: {item.status}</div>
                    <div key={5} className='c-card concert-url'><a key={6} href={item.url} className='concert-card-url'>Go To Website</a></div> 
                                          
                </li> 
                 ])}
                </section>
            </div>
          </header>
        </div>
      );
}
    
    export default FestivalForm;