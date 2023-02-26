import React from 'react';
import cityPic from '../../assets/pictures/city.jpg'
import FestivalPageForm from '../festivalPageForm'

export default function festivalPage() { 
    
    
    return (
        <section className='homepage'>
            <h1 className="web-title"><b>CONCERTS</b></h1>
            <img src={cityPic}  alt="" className="city-pic"/>
            <FestivalPageForm />
        </section>
            
    );
}