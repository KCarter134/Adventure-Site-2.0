import React, { useState } from 'react'
import homePic from '../../assets/pictures/homePic.jpg'
import { Link } from 'react-router-dom'
import nationalPic from '../../assets/pictures/nationalParks.jpg'
import stateParksPic from '../../assets/pictures/stateParks.jpg'
import concertPic from '../../assets/pictures/concert.jpg'
import AliceCarousel from 'react-alice-carousel';

export default function Home() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [park, setPark] = useState([]);

    
    useState(() => {
        fetch("https:developer.nps.gov/api/v1/parks?&limit=800&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd")
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setData(result.data);
                setPark(generatePark(result.data))

            },
            (error) => {
                setIsLoaded(true);
                setError(error);
                console.log("error")
            }
        )

    })

    const handleSubmit = (e) => {  
        e.preventDefault() 
        
        setPark(generatePark(data));
        // console.log(data)
    }
        
    const handleChange = (event) => {
        // setStateInput(event.target.value)
    }

    const generatePark = (allParks) => {
        let threeRandomOnes = []
        for(let i = 0; i < 3; i++){
          let randomPark = Math.floor(Math.random() * allParks.length)
          while(threeRandomOnes.includes(randomPark)){
            randomPark = Math.floor(Math.random() * allParks.length)
          }
          threeRandomOnes.push(allParks[randomPark])
        }
    
        return threeRandomOnes;
    }    

    const getImages = (items) => {
        {park.map(item => (
            <li key={item.id} >
                {item.images.map(pics => (
                    <li key={pics.id}>
                        <img src={pics.url} alt='' className='result-img' />
                    </li>
                ))}
            </li>
          ))}
    }

    const responsive = {
        0: {
            items: 1
        }
    }

    return(
        <main className='home-wrapper'>
            <section className='pic-container'>
                <img src={homePic} alt="" className='homepic' />
            </section>
            <section>
                <div className='btn-holding-cont'>
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
                </div>
                <form className='random-cont' onSubmit={handleSubmit}>
                    <article className='random-trip-cont'>
                        <div className='inp-wrap'></div>
                            <div className='title-btn-wrapper'>
                                <div className='random-title'><i>Random Trip →</i></div>
                                <input type='submit' value='Randomize' className='park-inp inp' onSubmit={handleSubmit}/>
                            </div>
                        <div className='result-field res-field-top'>
                            {park.map(item => (
                                <li key={item.id} >
                                    <AliceCarousel responsive={responsive}>
                                    {item.images.map(pics => (
                                        // +100 to pic ID assures unique id 
                                        <div key={pics.id + 100} className='carousel-pic-wrapper'>
                                            <img key={pics.id} src={pics.url} alt='' className='result-img' />
                                        </div>    
                                    ))}
                                    </AliceCarousel>
                                <div className='home-info-flex'>      
                                    <div className='ran-park-name'>{item.fullName}</div>
                                    <div className='ran-park-city'>{item.addresses[0].city}
                                        <span className='ran-park-sc'>, {item.addresses[0].stateCode}</span>
                                        <span className='ran-park-pc'>, {item.addresses[0].postalCode}</span>
                                    </div>
                                    <div className="ran-park-address">{item.addresses[0].line1}</div>
                                <div className='gotoBtn'><a href={item.url} className='park-url card-url'>Go To Website</a></div>
                                </div>      
                                <div className='ran-park-desc'>{item.description}</div>
                                </li>
                              ))}
                            {/* DO NOT ADD A SEMI-COLON ----- it adds margin to the right...??????? */}
                        </div>
                    </article>
                    <article className='random-concert-cont'>
                        <div className='inp-wrap lower-wrap'></div>
                        <div className='title-btn-wrapper'>
                            <div className='random-title'><i>Popular Travel Locations →</i></div>
                        </div>
                        <div className='result-field'>
                            <div className='trav-loc-1'>
                                <img src='Yosemite' alt='' className='pop-trav-img' />
                                <div className='trav-loc-info-wrapper'>
                                    <div className='trav-title'>Yosemite</div>
                                    <div className='trav-location'></div>
                                    <div className='trav-desc'></div>
                                </div>
                            </div>
                        </div>
                    </article>
                </form>
            </section>
        </main>
    );
    
}