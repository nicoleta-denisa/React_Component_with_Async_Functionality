import React, { useEffect, useState } from 'react';

export default function Weather() {
    const [weather, setWeather] = useState([]);
  
    useEffect(() => {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=Brasov,Ro&appid=c7da641777760054e5ca6164eb47580a')
      .then(res => res.json())
        .then(results => {
            setWeather({
               temp:results.main.temp,
               temp_min:results.main.temp_min,
               temp_max:results.main.temp_min,
               feels_like:results.main.feels_like,
               icon:results.weather[0].icon,
            })
        })
    }, []);

    function getTempInC(temp) {
        let celsius = temp - 273.15;
        return celsius;
    }
    return (
        <div>
            <h1>The weather for Brasov</h1>
            <img src= {'http://openweathermap.org/img/wn/'+weather.icon+'@2x.png'} alt='not available'/>
            <p>Temperature: { getTempInC(weather.temp).toPrecision(3) } &#8451;</p>
            <p>Min: { getTempInC(weather.temp_min).toPrecision(3) } &#8451; | Max: { getTempInC(weather.temp_max).toPrecision(3) }&#8451; </p> 
            <p>Feels like:  {getTempInC(weather.feels_like ).toPrecision(3) }  &#8451;</p>
        </div>    
    )
}