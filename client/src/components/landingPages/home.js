import React, { useState } from 'react'
import homePic from '../../assets/pictures/homePic.jpg'
import { Link } from 'react-router-dom'
import nationalPic from '../../assets/pictures/nationalParks.jpg'
import stateParksPic from '../../assets/pictures/stateParks.jpg'
import concertPic from '../../assets/pictures/concert.jpg'

export default function Home() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [park, setPark] = useState([])

    
    useState(() => {
        fetch('https:developer.nps.gov/api/v1/parks?&limit=800&api_key=8w91BhYJTMpXTIMCgectXocGhMCToXrslPKdoQwd')
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setData(result.data);

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
        generatePark();
        // console.log(data)
    }
        
    const handleChange = (event) => {
        // setStateInput(event.target.value)
    }

    const generatePark = () => {
        let threeRandomOnes = []
        for(let i = 0; i < 3; i++){
          let randomPark = Math.floor(Math.random() * data.length)
          while(threeRandomOnes.includes(randomPark)){
            randomPark = Math.floor(Math.random() * data.length)
          }
          threeRandomOnes.push(data[randomPark])
        }        
        return setPark(threeRandomOnes);
    }    

    const getImage = (item) => {
        try{
            return item.images[0].url;
        }catch{
            return <div>no image</div>;
        }
    }

    // const getAddress = (item) => {
    //     try{
    //         if(item.addresses != null){
    //             let address = ""
    //             address += item.addresses[0].city + ", " + item.addresses[0].stateCode + " " + item.addresses[0].postalCode;
    //             return address
    //         } 
    //     }catch {
    //         return console.log("na")
    //     }
    // }

 console.log(park)
    return(
        <main className='home-wrapper'>
            <section className='pic-container'>
                <img src={homePic} alt="" className='homepic' />
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
            </section>
            <section>
                <form className='random-cont' onSubmit={handleSubmit}>
                    <article className='random-trip-cont'>
                        <div className='inp-wrap'>
                            <input type='submit' value='Random Park' className='park-inp inp' onSubmit={handleSubmit}/>
                        </div>
                        <div className='result-field'>
                            <div className='result1'>
                                <img className='result-img' src={getImage(park[0])} />
                                <p>{}</p>
                            </div>
                            <div className='result2'>
                                <img className='result-img' src={getImage(park[1])} />
                                <p></p>
                            </div>
                            <div className='result3'>
                                <img className='result-img' src={getImage(park[2])} />
                                <p></p>
                            </div>
                            <article>{}</article>
                        </div>
                    </article>
                    <article className='random-concert-cont'>
                        <div className='inp-wrap'>
                            <input type='submit' value='Random Concert' className='concert-inp inp' />
                        </div>
                        <div className='result-field'>
                            
                        </div>
                    </article>
                </form>
            </section>
        </main>
    );
}