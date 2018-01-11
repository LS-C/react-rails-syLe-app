import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchProfile } from '../actions/profile';
import Profile from '../components/Profile'

class ProfileContainer extends Component {

    componentDidMount() {
        this.props.fetchProfile()
    }

    render() {
      console.log('from profile container', this.props.profile.email)
      return(
        <div>
          <Profile profile={this.props.profile} email={this.props.profile.email} fetchProfile={this.props.fetchProfile} />
        </div>
      )
    }
}

const mapStateToProps = state => {
  return { profile: state.user.profile }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ fetchProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(ProfileContainer)
