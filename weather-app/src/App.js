
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current-weather/currentWeather.js';
import Forecast from './components/forecast/forecast.js';

import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import { useState } from 'react';

function App() {
   
  const [currentWeather, setCurrentWeather] = useState(null);
  const [foreCast,setforeCast] = useState(null);

  const handleOnSearchChange = (searchData)=>{
        console.log("searchData: ",searchData);
        const [lat,lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
        const foreCastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);

        Promise.all([currentWeatherFetch,foreCastFetch])
        .then(async (response) =>{
          const weatherResponse = await response[0].json();
          const foreCaseResponse = await response[1].json();
          console.log("weatherResponse :",weatherResponse);
          console.log("foreCaseResponse :",foreCaseResponse)

          setCurrentWeather({city: searchData.label , ...weatherResponse});
          setforeCast({city: searchData.label , ...foreCaseResponse});
        })
        .catch((error)=>{
          console.log(error);
        })
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}/>
     { currentWeather && <CurrentWeather data = {currentWeather}/>}
     { foreCast && <Forecast data = {foreCast}/>}    
     </div>
  );
}

export default App;
