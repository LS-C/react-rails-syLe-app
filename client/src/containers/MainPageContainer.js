import React, { Component } from 'react';
import NewsContainer from '../containers/NewsContainer';
import WeatherContainer from '../containers/WeatherContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/login';
import { fetchProfile } from '../actions/profile';
import { removeArticles, fetchSavedArticles } from '../actions/newz';
import TopArticlesContainer from '../containers/TopArticlesContainer';
import store from 'store';

class MainPageContainer extends Component {

  componentDidMount() {
    const token = store.get('auth_token')
    if (token === undefined) {
      this.props.logout()
      this.props.history.push('/login')
    } else {
      this.props.fetchProfile()
      this.props.fetchSavedArticles()
    }
  }

  componentWillUnmount() {
    this.props.removeArticles()
  }

  renderContent() {
    if (this.props.loggedStatus) {
      return (
        <div>
          <div>
            <WeatherContainer />
            <TopArticlesContainer />
            <NewsContainer fetchSavedArticles={this.props.fetchSavedArticles} />
          </div>
        </div>
      );
    }
    else
      return (
        <div className='welcome-page' >
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
  return {
    loggedStatus: state.login.loggedIn,
    profile: state.user.profile,
    path: state.path.path
   }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ logout, fetchProfile, removeArticles, fetchSavedArticles }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToState)(MainPageContainer);
