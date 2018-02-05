import React, { Component } from 'react';
import RecommendMovie from './RecommendMovie';
import Recommend from './Recommend';


class RecommendsShow extends Component {

  constructor() {
    super()

    this.state = {
      moviesList: false,
      booksList: false,
      showList: false,
      artistList: false
    }
  }

  renderMovies = () => {
    const movieList = this.props.recommends.filter(movie =>
      movie.Type === "movie"
    )
    const movies = movieList.map((movie, index) => {
      return (
        <div key={index}>
        <RecommendMovie recommend={movie} />
        </div>
      )
    }
    )
    return movies
  }

  renderRecommends = () => {
    const recommendList = this.props.recommends.filter(movie =>
      movie.Type !== "movie"
    )
    const list = recommendList.map((recommend, index) => {
      return (
        <div key={index}>
        <Recommend recommend={recommend} />
        </div>
      )
    }
    )
    return list
  }



  render() {
    return(
      <div style={style}>
        {this.renderMovies()}
        {this.renderRecommends()}
      </div>
    )
  }
}


  const style= {
    marginTop: '16em',
    marginLeft: '4em',
    color: 'black',
    fontFamily: "Montserrat"
  }

export default RecommendsShow

RecommendsShow.defaultProps = {
  recommends: []
}
