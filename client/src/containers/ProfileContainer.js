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
      console.log(this.props.profile)
      return(
        <div>
          <Profile profile={this.props.profile} />
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
