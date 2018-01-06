import React, { Component } from 'react';
import WeatherShow from '../components/WeatherShow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import fetchWeather from '../actions/weathers';
import { Loader, Segment } from 'semantic-ui-react';


class WeatherContainer extends Component {

  componentDidMount() {
    this.props.fetchWeather()
  }



  render() {
    const display_location = {...this.props.weatherData.display_location}
    const style= {
      position: 'absolute',
      top: '8em',
      right: '1em',
      color: 'black'
    }
    return (
      <div>
        {this.props.loading ?
          <div style={style}>
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
