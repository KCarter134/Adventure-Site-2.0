import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parkPic from "../assets/pictures/park.jpg";


function TravelParks() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setItems] = useState([]);

    useEffect(() => {
        fetch("https://developer.nps.gov/api/v1/people?limit=50&start=0&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result.data);
                // console.log(result.data)
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
            <img src={parkPic} className='park-pic card-pic' alt='parkpic'></img>
            <div className='page-nav-wrap'>
                <div className='page-nav'>
                    <Link to="/TravelParks" className='nav'>Parks</Link>
                    <Link to="/TravelCamping" className='nav'>Camping</Link>
                    <Link to="/TravelEvents" className='nav'>Events</Link>
                    <Link to="/TravelPlaces" className='nav'>Places</Link>
                    <Link to="/TravelPeople" className='nav in-use'>People</Link>
                    <Link to="/TravelTours" className='nav'>Tours</Link>
                </div>
            </div>

            <div className='mapped-info-inner'>
            {data.map(item => (
                <li key={item.id} >
                <img className='container-pic' alt='map data' src={item.images[0].url}></img>
                        <div className='park-name card-name'>{item.fullName}</div>
                        <div className='urlBtn'><a href={item.url} className='park-url card-url'>Go To Website</a></div>
                        <div className='park-desc card-desc'>{item.description}</div>
                </li>
        ))}
            </div>
        </section>
    );
  }
}

export default TravelParks;