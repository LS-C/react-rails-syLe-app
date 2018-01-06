import React, { Component } from 'react';
import RecommendationsQueryBar from '../components/RecommendationsQueryBar'

class RecommendationsContainer extends Component {

  fetchRecomm(query) {
    const q = query
    const T_API_KEY =""
    fetch(`https://tastedive.com/api/similar?q=${q}&k=${T_API_KEY}`)
    .then(res => res.json())
    .then(json => console.log(json.Similar))
    }

  handleSubmit = (query) => {
    this.fetchRecomm(query)
  }

  render() {
    return (
      <div>
        <RecommendationsQueryBar handleSubmit={this.handleSubmit}/>
      </div>
    )
  }
}


export default RecommendationsContainer
