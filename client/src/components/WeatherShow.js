import React from 'react';

const style= {
  position: 'absolute',
  top: '8em',
  right: '1em',
  color: 'black'
}

const weather= {
  width: '10%',
  height: '10%'
}

const weather2= {
  width: '2.6em',
  height: '2.6em'
}




const WeatherShow = (props) =>
    <div style={style}>
      <p>{props.location}</p>
      <p style={{display: "inline-block"}}>{props.weather.weather}</p>
      <img src={require(`../images/weatherIcons/Overcast.png`)} style={weather2}/> <br/>
      <p style={{display: "inline-block"}}>{props.weather.temp_f}</p><img src={require('../images/weatherIcons/if_weather_22_2682829.png')} style={weather} />



    </div>

export default WeatherShow
