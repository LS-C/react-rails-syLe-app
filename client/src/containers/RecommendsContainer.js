import React, { Component } from 'react';
import RecommendsQueryBar from '../components/RecommendsQueryBar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchRecommends } from '../actions/recommends';
import RecommendsShow from '../components/RecommendsShow';


class RecommendsContainer extends Component {

  handleSubmit = (query) => {
    this.props.fetchRecommends(query)
  }

  render() {
    console.log(this.props.recommends)
    return (
      <div>
        <RecommendsQueryBar handleSubmit={this.handleSubmit}/>
        <RecommendsShow recommends={this.props.recommends}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { recommends: state.recommends.recommends}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchRecommends }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(RecommendsContainer)
