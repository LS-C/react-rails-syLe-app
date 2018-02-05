import React from 'react';
import '../containers/Weather.css'

const WeatherShow = (props) =>
    <div className="weather-container">
      <p>{props.location}</p>
      <p style={{display: "inline-block"}}>{props.weather.weather}</p>
      <img src={require(`../images/weatherIcons/Overcast.png`)}
      alt="" className="weather2"/> <br/ >
      <p style={{display: "inline-block"}}>{props.weather.temp_f}</p>
      <img src={require('../images/weatherIcons/if_weather_22_2682829.png')}
      alt="" className="weather" />
    </div>

export default WeatherShow
