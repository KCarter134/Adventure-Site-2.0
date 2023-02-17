import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FestivalPage from "./components/festivalPage";
import Home from './components/home'
import Travel from "./components/travel"
import Navbar from './components/navbar';
import TravelAPI from './components/travelAPI'
import TravelParks from './components/travelParks'
import TravelCamping from './components/travelCamping'
import TravelEvents from './components/travelEvents'
import TravelPlaces from './components/travelPlaces'
import TravelPeople from './components/travelPeople'
import TravelTours from './components/travelTours'
import './index.css';

export default function App() {
  return (
        <>
        <Navbar />
        
        <div className="App">
          <Routes>
            <Route path="/Personal-Adventure" element={<Home />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/festivalPage" element={<FestivalPage />}/>
            <Route path="/travel" element={<Travel />}/>
            <Route path='/travelParks' element={<TravelParks />} />
            <Route path='/travelCamping' element={<TravelCamping />} />
            <Route path='/travelEvents' element={<TravelEvents />} />
            <Route path='/travelPlaces' element={<TravelPlaces />} />
            <Route path='/travelPeople' element={<TravelPeople />} />
            <Route path='/travelTours' element={<TravelTours />} />
          </Routes>
        </div>
        </>

  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();