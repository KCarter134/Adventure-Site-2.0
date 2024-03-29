import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import starsPic from "../../assets/pictures/stars.jpg"
import "../../utils/helpers";

function TravelCamping() {

    // const [error, setError] = useState(null);
    // const [isLoaded, setIsLoaded] = useState(false);
    const [ data, setData ] = useState([]);
    const [ StateInput, setStateInput ] = useState("");
    const [ pictures, setPictures ] = useState({})

    const handleSubmit = (e) => {  
                e.preventDefault() 
                campingData(e);
            }
            
    const handleChange = (event) => {
        setStateInput(event.target.value)
    }

    const campingData = () => {
        fetch("https://developer.nps.gov/api/v1/campgrounds?stateCode=${StateInput}&fields=images&limit=800&start=0&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd")
            .then(res => res.json())
            .then((result) => {
                // setIsLoaded(true);
                setData(result.data);
                console.log(result.data);
                console.log(StateInput)
                result?.data?.map((image, i) => {
                    return image.images.map((img, i) => {
                        return setPictures(img)          
                        })
                    }
                );
            },
        )
    };
    
    const getImage = (item) => {
        try{
            if(item.images != null){
                return item.images[0].url;
            }
        }catch{
            return pictures.url;
        }
    }

    const getAddress = (item) => {
        try{
            if(item.addresses != null){
                let address = ""
                address += item.addresses[0].city + ", " + item.addresses[0].stateCode + " " + item.addresses[0].postalCode;
                return address
            } 
        }catch {
            return console.log("na")
        }
    }
    
    return (
        <section className='mapped-info-cont'>
            <img src={starsPic} className='park-pic card-pic' alt='main-img'></img>
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

            <form className='national-form' onSubmit={(e) => {handleSubmit(e)}}>
                <input 
                    type="text" 
                    className='national-input'
                    name='stateCode'
                    value={StateInput}
                    placeholder="state of camping destination"
                    onChange={handleChange}
                    />
                <input className='national-srch-btn' type="submit" value="Search" onSubmit={handleSubmit} />  
            </form>
 
            <div className='mapped-info-inner camp-inner'>
            {data.map(item => (
                <li key={item.id}>
                    <img className='container-pic' alt='card-img' src={getImage(item)}></img>
                        <div className='camp-name card-title'>{item.name}</div>
                        <div className='camp-address card-title'>{getAddress(item)}</div>
                        <div className='camp-sites'>Campsites Available: {item.campsites.totalSites}</div>
                        <div className='camp-desc card-desc'>{item.description}</div>
                        <div className='camp-urlBtn urlBtn'><a href={item.url} className='camp-url card-url'>Go To Website</a></div>                        
                </li>
        ))}
            </div>
            
        </section>
    );
  
}

export default TravelCamping;