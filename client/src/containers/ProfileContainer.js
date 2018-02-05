import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProfile } from '../actions/profile';
import Profile from '../components/Profile';
import store from 'store';

class ProfileContainer extends Component {

    componentDidMount() {
      const token = store.get('auth_token')
      if (token === undefined) {
        this.props.history.push('/')
      } else {
        this.props.fetchProfile()
      }
    }

    render() {
      return(
        <div>
          <Profile profile={this.props.profile} email={this.props.profile.email} fetchProfile={this.props.fetchProfile} />
        </div>
      )
    }
}

const mapStateToProps = state => {
  return { profile: state.user.profile,
            path: state.path.path
          }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ fetchProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(ProfileContainer)
