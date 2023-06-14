import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parkPic from "../../assets/pictures/park.jpg";
import DropDown from "../../utils/stateMapping"


function TravelParks() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [ StateInput, setStateInput ] = useState("");
    const [data, setData] = useState([]);
    const [dropdown, setDropdown] = useState("");
    const [isClicked, setIsClicked] = useState(false);

    const handleDropdown = (dropdownChoice) => {
      setDropdown(dropdownChoice);
    }

    const handleSubmit = (e) => {  
        setIsClicked(true)
        e.preventDefault() 
        parkData(e);
        console.log(StateInput) 
    }
        
    const handleChange = (event) => {
        setStateInput(event.target.value)
    }

    const parkData = () => {
        fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${dropdown}&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd`)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setData(result.data);
                console.log(result.data)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log("error")
            }
        )
    }

    const initialParkData = () => {
        fetch(`https://developer.nps.gov/api/v1/parks?limit=6&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd`)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setData(result.data);
                console.log(result.data)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log("error")
            }
        )
    }

    useEffect(() => {
        // if(!isClicked) {
        //     initialParkData();
        // }else{
        //     parkData();
        // }
    })
    

    return (
        <section className='mapped-info-cont'>
            <img src={parkPic} className='park-pic card-pic' alt='parkpic'></img>
            <div className='page-nav-wrap'>
                <div className='page-nav'>
                    <Link to="/TravelParks" className='nav in-use'>Parks</Link>
                    <Link to="/TravelCamping" className='nav'>Camping</Link>
                    <Link to="/TravelEvents" className='nav'>Events</Link>
                    <Link to="/TravelPlaces" className='nav'>Places</Link>
                    <Link to="/TravelPeople" className='nav'>People</Link>
                    <Link to="/TravelTours" className='nav'>Tours</Link>
                </div>
            </div>

            <form className='national-form' onSubmit={(e) => {handleSubmit(e)}}>
                {/* <input 
                    type="text" 
                    className='national-input'
                    name='stateCode'
                    value={StateInput}
                    placeholder="state of national park destination"
                    onChange={handleChange}
                    /> */}
                    <DropDown onComponentChange={handleDropdown}  />
                    
                <input className='national-srch-btn' type="submit" value="Search" onSubmit={handleSubmit} />  
            </form>

            <div className='mapped-info-inner'>
            {data.map(item => (
                <li key={item.id} >
                <img className='container-pic' alt='map data' src={item.images[0].url}></img>
                        <div className='park-name card-name'>{item.fullName}</div>
                        <div className='address-city'>{item.addresses[0].city}
                            <span className='address-state'>, {item.addresses[0].stateCode}</span>
                            <span className='address-postal'>, {item.addresses[0].postalCode}</span>
                        </div>
                        <div className="physical-address">{item.addresses[0].line1}</div>
                        <div className='urlBtn'><a href={item.url} className='park-url card-url'>Go To Website</a></div>
                        <div className='park-desc card-desc'>{item.description}</div>
                </li>
            ))}
            </div>
        </section>
    );
}

export default TravelParks;