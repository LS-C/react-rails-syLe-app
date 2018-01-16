import React from 'react';
import store from 'store';
import NewsContainer from '../containers/NewsContainer';
import WeatherContainer from '../containers/WeatherContainer';
import SocialLinkContainer from '../containers/SocialLinkContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/login';
import { fetchProfile } from '../actions/profile';
import { fetchTrendingArticles, removeArticles } from '../actions/newz';


class MainPageContainer extends React.Component {

  componentDidMount() {
    this.props.fetchProfile()
  }

  componentWillUnmount() {
    this.props.removeArticles()
  }

  renderContent() {
    const { email } = this.props.profile;

    if (this.props.loggedStatus) {
      return (
        <div>
            <h3>Welcome {email}</h3>
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
    console.log(this.props.loggedStatus)

    console.log(this.props.topArticles)
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
    topArticles: state.news.trendingArticles
   }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ logout, fetchProfile, fetchTrendingArticles, removeArticles }, dispatch )
}


export default connect(mapStateToProps, mapDispatchToState)(MainPageContainer);
