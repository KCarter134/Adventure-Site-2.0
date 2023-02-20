import reportWebVitals from './reportWebVitals';
import { Routes, Route } from "react-router-dom";
import FestivalPage from "./components/landingPages/festivalPage";
import Home from './components/landingPages/home'
import NationalTravel from "./components/landingPages/nationalTravel"
import Navbar from './components/navbar';
import TravelParks from '../src/components/travelPages/travelParks'
import TravelCamping from '../src/components/travelPages/travelCamping'
import TravelEvents from '../src/components/travelPages/travelEvents'
import TravelPlaces from '../src/components/travelPages/travelPlaces'
import TravelPeople from '../src/components/travelPages/travelPeople'
import TravelTours from '../src/components/travelPages/travelTours'
import LocalTravel from './components/landingPages/localTravel'
import Profile from './components/landingPages/profile'
import Login from './components/user/login'
import Signup from './components/user/signup'
import './index.css';

export default function App() {
  return (
        <>
        <Navbar />
        
        <div className="App">
          <Routes>
            <Route path="/Adventure-Site-2.0" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/festivalPage" element={<FestivalPage />}/>
            <Route path="/nationalTravel" element={<NationalTravel />}/>
            <Route path='/travelParks' element={<TravelParks />} />
            <Route path='/travelCamping' element={<TravelCamping />} />
            <Route path='/travelEvents' element={<TravelEvents />} />
            <Route path='/travelPlaces' element={<TravelPlaces />} />
            <Route path='/travelPeople' element={<TravelPeople />} />
            <Route path='/travelTours' element={<TravelTours />} />
            <Route path='/localTravel' element={<LocalTravel />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </div>
        </>

  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();