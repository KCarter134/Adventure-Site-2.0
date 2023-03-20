import React from 'react'
import homePic from '../../assets/pictures/northernlights.jpg'
import { Link } from 'react-router-dom'
import nationalPic from '../../assets/pictures/nationalParks.jpg'
import stateParksPic from '../../assets/pictures/stateParks.jpg'
import concertPic from '../../assets/pictures/concert.jpg'

export default function Home() {


    return(
        <section className='pic-container'>
            <img src={homePic} alt="" className='homepic' />
            <p className='btn-holding-cont'>
                <Link to="/nationalTravel" type='button' className='home-btn'>
                    <div className='home-btn-text'>Travel Nationally</div>
                    <img src={nationalPic} alt='' className='home-display' />
                </Link>
                {/* <Link to="/travelCamping" type='button' className='home-btn'>
                    <img src={travelCampingPic} alt='' className='home-display' />
                    <div className='home-btn-text'>Go Camping</div>
                </Link> */}
                <Link to="/localTravel" type="button" className="store-favorites-btn home-btn">
                    <div className='home-btn-text'>Travel Locally</div>
                    <img src={stateParksPic} alt='' className='home-display' />
                </Link>
                <Link to="/festivalPage" type='button' className='home-btn concert-img'>
                    <div className='home-btn-text'>Attend Concerts</div>
                    <img src={concertPic} alt='' className='home-display' />
                </Link>
            </p>
            <p className='randomize-cont'>
                <div className='random-trip-cont'>
                    <input type="submit" value="Random Trip" className='randomize-btn rn-trip' />
                    <div className='random-card-cont'></div>
                </div>
                <div className='random-concert-cont'>
                    <input type="submit" value="Random Concert" className='randomize-btn rn-concert' />
                    <div className='random-card-cont'></div>
                </div>
            </p>  
        </section>
    );
}