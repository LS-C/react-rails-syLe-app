import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MainPageContainer from './containers/MainPageContainer';
import NavBar from './components/NavBar';
import SavedArticlesContainer from './containers/SavedArticlesContainer'
import MostSavedArticlesContainer from './containers/MostSavedArticlesContainer';
import ProfileContainer from './containers/ProfileContainer';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {

  _logInRoutes() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Route exact path='/toparticles' component={MostSavedArticlesContainer} />
          <Route exact path='/articles' component={SavedArticlesContainer} />
          <Route exact path='/profile' component={ProfileContainer} />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <NavBar />
          <Route exact path='/' component={MainPageContainer} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />
          {this._logInRoutes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.login.loggedIn}
}

export default withRouter(connect(mapStateToProps)(App))
