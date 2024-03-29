import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import parkPic from "../../assets/pictures/park.jpg"
import "../../utils/helpers"

// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON
// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON
// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON
// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON
// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON
// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON
// NOT TRUE PAGE YET... STILL NEEDS TO BE CREATED AND WORKED ON

function TravelCamping() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState([]);

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/campgrounds?limit=50&start=0&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data);            
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
            )
        }, [])

if (error) {
return <div>Error: {error.message}</div>;
} else if (!isLoaded) {
return <div>Loading...</div>;
} else {
    
    return (
        <section className='mapped-info-cont'>
            <img src={parkPic} className='park-pic card-pic' alt='main-img'></img>
            <div className='page-nav-wrap'>
                <div className='page-nav'>
                    <Link to="/TravelParks" className='nav'>Parks</Link>
                    <Link to="/TravelCamping" className='nav in-use'>Camping</Link>
                    <Link to="/TravelEvents" className='nav'>Events</Link>
                    <Link to="/TravelPlaces" className='nav'>Places</Link>
                    <Link to="/TravelPeople" className='nav'>People</Link>
                    <Link to="/TravelTours" className='nav'>Tours</Link>
                </div>
            </div>
 
            <div className='mapped-info-inner camp-inner'>
            {data.map(item => (
                <li key={item.id}>
                <img className='container-pic' alt='card-img' src={item.images[0]}></img>
                        <div className='camp-name card-title'>{item.name}</div>
                        <div className='camp-sites'>Campsites Available: {item.campsites.totalSites}</div>
                        <div className='camp-desc card-desc'>{item.description}</div>
                        <div className='camp-urlBtn urlBtn'><a href={item.url} className='camp-url card-url'>Go To Website</a></div>                        
                </li>
        ))}
            </div>
            
        </section>
    );
  }
}

export default TravelCamping;