import React from 'react';
import { Link } from 'react-router-dom'
import mountainPic from '../assets/pictures/mountain.jpg'
import parkPic from "../assets/pictures/park.jpg"
import campPic from "../assets/pictures/camping.jpg"
import parkEvents from "../assets/pictures/parkEvents.jpg"
import placesPic from "../assets/pictures/placesPic.jpg"
import activitiesPic from "../assets/pictures/activitiesPic.jpg"
import parkTourPic from "../assets/pictures/parkTourPic.jpg"




function Travel() {

    return (
        <section className='travel-main'>
            <img src={mountainPic} alt="" className='mountainPic' />
            <div id='travel-option-container'>
                <Link to="/TravelParks" className='travel-option monuments'>
                    <img src={parkPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text parks-text'>Parks</div>
                </Link>
                <Link to="/TravelCamping" className='travel-option camping'>
                    <img src={campPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text camping-text'>Camping</div>
                </Link>
                <Link to="/TravelEvents" className='travel-option events'>
                    <img src={parkEvents} alt='' className='travel-pic' />
                    <div className='travel-picture-text events-text'>Events</div>
                </Link>
                <Link to="/TravelPlaces" className='travel-option something1'>
                    <img src={placesPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text places-text'>Places</div>
                </Link>
                <Link className='travel-option something2'>
                    <img src={activitiesPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text activites-text'>People</div>
                </Link>
                <Link className='travel-option something3'>
                    <img src={parkTourPic} alt='' className='travel-pic' />
                    <div className='travel-picture-text tours-text'>Tours</div>
                </Link>
            </div>
        </section>
    );
  }


export default Travel;