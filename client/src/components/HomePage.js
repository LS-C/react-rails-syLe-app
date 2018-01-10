import React from 'react';
import store from 'store';
import NewsContainer from '../containers/NewsContainer';
import WeatherContainer from '../containers/WeatherContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/login';



class HomePage extends React.Component {
  constructor() {
    super();

    this.state = {
      userEmail: null
    }
  }

  componentDidMount() {
    const { userEmail } = this.state;
    const auth_token = store.get('auth_token');
    const id = store.get('id')
    const url = `/users/${id}`
    const requestHeaders = {
      'Authorization': 'Bearer ' + auth_token
    };

    if (!userEmail && this.props.loggedStatus)

    fetch(url, {
        method: 'get',
        headers: requestHeaders
    })
      .then(res=>res.json())
      .then(json => this.setState({ userEmail: json.email }))
      .catch(err => console.log(err));
  }

  handleClick = () => {
    console.log("Hey")
  }

  renderContent() {
    const { userEmail } = this.state;

    const style = {
      position: 'fixed',
      top: 62,
      left: 0,
      width: '100%',
      backgroundColor: "black",
      height: '100vh'
    }

    const welcome = {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       color: 'white',
       fontSize: '24px',
       fontFamily: "Montserrat"
    }

    const newsBar = {
       position: 'absolute',
       top: '30%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       fontFamily: "Montserrat"
      //  color: 'white',
    }

    if (this.props.loggedStatus) {
      const styleSpace = {
        margin: '0.3em'
      }
      return (
        <div>
        <h3>Welcome {userEmail}</h3>
          <div>
          <a href="https://en-gb.facebook.com/login/" target="_blank"
          rel="noopener noreferrer" style={styleSpace}>
             <img src={require('../images/brandIcons/facebook-logo.png')} alt=""
             style={{height: '2em', width: '2em'}}/>
           </a>
          <a href="https://www.instagram.com/?hl=en" target="_blank"
          rel="noopener noreferrer" style={styleSpace} >
             <img src={require('../images/brandIcons/instagram-logo.png')} alt=""
             style={{height: '3em', width: '3em'}}/>
           </a>
            <a href="https://twitter.com/" target="_blank"
            rel="noopener noreferrer" style={styleSpace}>
              <img src={require('../images/brandIcons/twitter-logo.png')} alt=""
              style={{height: '2em', width: '2em'}}/>
            </a>
            <a href="https://www.linkedin.com/" target="_blank"
            rel="noopener noreferrer" style={styleSpace}>
              <img src={require('../images/brandIcons/linkedin-logo.png')} alt=""
              style={{height: '2em', width: '2em'}}/>
            </a>
            <a href="https://plus.google.com/discover" target="_blank"
            rel="noopener noreferrer" style={styleSpace}>
              <img src={require('../images/brandIcons/google-plus-logo.png')} alt=""
              style={{height: '2em', width: '2em'}}/>
            </a>
          </div>
          <div>
          <WeatherContainer />
          </div>
          <div>
          </div>
          <div style={newsBar}>
            <NewsContainer />
          </div>
        </div>
      );
    }
    else
      return (
        <div className='welcome-page' style={style}>
        <p style={welcome}>
          Landing Zone
        </p>
        </div>
      )
  }


render() {
  console.log('from homepage', this.props.loggedStatus)
  return (
    <div>
    { this.renderContent() }

    </div>
  );
}
}

const mapStateToProps = state => {
  return { loggedStatus: state.login.loggedIn }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ logout }, dispatch )
}




export default connect(mapStateToProps, mapDispatchToState)(HomePage);
