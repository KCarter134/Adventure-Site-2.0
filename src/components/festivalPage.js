import React, {useState, useEffect } from 'react';
import cityPic from '../assets/pictures/city.jpg'
import FestivalPageForm from './festivalPageForm'

export default function Homepage() {


    // const searchByCityCoords = (city) => {
    //     let APIKey = '22c381336de0f996a4083c7ecafd3174';
    //     let queryCity = 'https://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=' + APIKey;
    //      //Query city for coordinates from OpenWeatherMap
    //     fetch(queryCity)
    //     .then(result => { 
    //         console.log(result.status)
    //         return result.json();
    //     })
    //     .then(data => {
    //             let something = 'https://api.seatgeek.com/2/events?' + 'lon=' + data[0].lon+ '&' + 'lat=' + data[0].lat +  '&taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM'
    //             fetch(something)
    //             .then(result => {
    //                 console.log(result.status);
    //                 return result.json();
    //             })
    //             .then(data => {
    //                 console.log(data)
    //             })
    //     })
    // }
    // searchByCityCoords();


    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [data, setItems] = useState([]);

    // const dataFetch = (data) => {
    //     fetch("https://api.openweathermap.org/geo/1.0/direct?q=" + data + "&limit=1&appid=22c381336de0f996a4083c7ecafd3174")
    //         .then(res => res.json())
    //         .then((result) => {
    //             setIsLoaded(true);
    //             setItems(result.data);
    //             console.log(result.data)
    //             let something = 'https://api.seatgeek.com/2/events?' + 'lon=' + data[0].lon+ '&' + 'lat=' + data[0].lat +  '&taxonomies.name=concert&client_id=MzEzNjU0MzZ8MTY3Mjk2NjkyNi4xMTAzMDM'
    //         fetch(something)
    //         .then(result => {
    //             console.log(result.status);
    //             return result.json();
    //         })
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(error => console.log('search failed')) 
    // })
    //         }
            

    // useEffect(() => {
    //     dataFetch();
    // }, [])
            
            
    
    return (
        <section className='homepage'>
            <h1 className="web-title"><b>Adventure Finder</b></h1>
            <img src={cityPic}  alt="" className="city-pic"/>
            <FestivalPageForm />
        </section>
            
    );
}