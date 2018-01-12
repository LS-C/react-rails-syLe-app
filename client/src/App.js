import React, { Component } from 'react';
import './App.css';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import HomePage from './components/HomePage';
import NavBar from './components/NavBar';
import SavedArticlesContainer from './containers/SavedArticlesContainer'
import MostSavedArticlesContainer from './containers/MostSavedArticlesContainer';
import RecommendsContainer from './containers/RecommendsContainer';
import ProfileContainer from './containers/ProfileContainer';

import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {

  logInRoutes() {
    if (this.props.loggedIn) {
      return (
        <div>
          <Route exact path='/toparticles' component={MostSavedArticlesContainer} />
          <Route exact path='/articles' component={SavedArticlesContainer} />
          <Route exact path='/recommendations' component={RecommendsContainer} />
          <Route exact path='/profile' component={ProfileContainer} />
        </div>
      )
    }
  }

  // shouldComponentUpdate(nextProps) {
  //   return nextProps !== this.props.loggedIn
  // }

  render() {
    return (
      <div className="container">
        <NavBar />
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignupPage} />

          {this.logInRoutes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.login.loggedIn}
}

export default withRouter(connect(mapStateToProps)(App))
