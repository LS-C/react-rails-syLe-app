import React from 'react';
import { Link } from 'react-router-dom';
import store from 'store';
import NewsContainer from '../containers/NewsContainer';
import WeatherContainer from '../containers/WeatherContainer';
import { Button } from 'semantic-ui-react';
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

    const welcome = {
       position: 'fixed',
       top: '50%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       color: 'white',
       fontSize: '16px'
    }

    if (this.props.loggedStatus) {
      return (
        <div>
        <h3>Welcome {userEmail}</h3>
          <div>
            <a href="https://en-gb.facebook.com/login/" target="_blank">
              <Button circular color='facebook' icon='facebook' />
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank">
            <Button circular color='instagram' icon='instagram' />
            </a>
            <a href="https://twitter.com/" target="_blank">
              <Button circular color='twitter' icon='twitter' />
            </a>
            <a href="https://www.linkedin.com/">
              <Button circular color='linkedin' icon='linkedin' />
            </a>
            <a href="https://plus.google.com/discover" target="_blank">
              <Button circular color='google plus' icon='google plus' />
            </a>
          </div>
          <div>
          <WeatherContainer />
          </div>
          <div>
          </div>
            <NewsContainer />
        </div>
      );
    }
    else
      return (
        <div className='welcome-page'>
        <p style={welcome}>
          Welcome
        </p>
        </div>
      )
  }

  // renderSiteEnterLinks = () =>
  //   <div>
  //     <Link to={'/login'} style={{margin: '1em'}}>Login</Link>
  //     <Link to={'/signup'}>SignUp</Link>
  //   </div>
  //
  //   handleLogout = () => {
  //     this.props.logout()
  //   }


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
