export default function fetchWeather() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_WEATHER' });
    navigator.geolocation.getCurrentPosition(function(position) {
    // let lat = position.coords.latitude
    // let lng = position.coords.longitude
    const WEATHER_API_KEY=''
    const WEATHER_API_URL =
    `http://api.wunderground.com/api/${WEATHER_API_KEY}/conditions/forecast/q/NY/New_York.json `
    fetch(WEATHER_API_URL)
    .then(res=>res.json())
    .then(json=>dispatch({ type: "FETCH_WEATHER", payload: json.current_observation }))
  })
  }
}
