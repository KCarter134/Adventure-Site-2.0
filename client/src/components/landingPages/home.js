import React from 'react'
import homePic from '../../assets/pictures/homePic.jpg'
import { Link } from 'react-router-dom'

export default function Home() {
    return(
        <section className='pic-container'>
            <img src={homePic} alt="" className='homepic' />
            <div className='home-btn-cont-wrapper'></div>
                <div className='home-btn-cont'>
                    <div className='btn-holding-cont'>
                        <Link to="./signup" type="button" className="random-btn home-btn"><div className='home-btn-text'>Sign Up</div></Link>
                        <Link to="./login" type="button" className="random-btn home-btn"><div className='home-btn-text'>Login</div></Link>
                        <Link to="./profile" type="button" className="store-favorites-btn home-btn"><div className='home-btn-text'>View Favorites</div></Link>
                        <div type="button" className="trip-plan-btn home-btn"><div className='home-btn-text'>Random Trip</div></div>  
                        <div type="button" className="random-btn home-btn"><div className='home-btn-text'>Under Construction</div></div>
                        <div type="button" className="random-btn home-btn"><div className='home-btn-text'>Under Construction</div></div>
                    </div>
                </div>
             <div className='info-module'>
            <div className='info-flex-container'></div></div>  
            <div className='front-info'></div> 
        </section>
    );
}