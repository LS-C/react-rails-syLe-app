import React, { Component } from 'react';
import WeatherShow from '../components/WeatherShow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/weathers';
import { Loader, Segment } from 'semantic-ui-react';
import './Weather.css'

class WeatherContainer extends Component {

  componentDidMount() {
    this.props.fetchWeather()
  }

  render() {
    const display_location = {...this.props.weatherData.display_location}
    return (
      <div>
        {this.props.loading ?
          <div className="weather-container">
          <Segment>
            <Loader active />
          </Segment>
            </div> :
        <WeatherShow weather={this.props.weatherData} location={display_location.full} /> }
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return { weatherData: state.weather.weatherData,
            loading: state.weather.loading }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({ fetchWeather }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(WeatherContainer)
