import React from 'react';
import store from 'store';
import NewsContainer from '../containers/NewsContainer';
import WeatherContainer from '../containers/WeatherContainer';
import SocialLinkContainer from '../containers/SocialLinkContainer';


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

    if (this.props.loggedStatus) {
      return (
        <div>
            <h3>Welcome {userEmail}</h3>
              <SocialLinkContainer />
          <div>
            <WeatherContainer />
            <NewsContainer />
          </div>
        </div>
      );
    }
    else
      return (
        <div className='welcome-page'>
          <p className="welcome">
            Landing Zone
          </p>
        </div>
      )
  }

  render() {
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
