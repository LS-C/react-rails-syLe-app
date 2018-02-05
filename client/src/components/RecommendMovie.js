import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import RecommendModal from './RecommendModal';
import { capitalize, findMovie, fetchMovie } from '../services/utils';

class RecommendMovie extends Component {

  state = {
    data: [],
    movie: []
  }

  componentDidMount() {
    const name = this.props.recommend.Name
    fetchMovie(name)
    .then(json=>this.setState({data: json.results}))
    .then(json => this._setMovieInfo(this.state.data, name)
    )
  }

  componentWillReceiveProps(nextProps){
    const name = nextProps.recommend.Name
    fetchMovie(name)
    .then(json=>this.setState({data: json.results}))
    .then(json => this._setMovieInfo(this.state.data, name))
  }

  componentWillUnmount() {
    this._clearState()
  }

  _setMovieInfo = (data, name) => {
    const movie = findMovie(data, name)[0]
    this.setState({ movie: movie })
  }

  _clearState = () => {
    this.setState({
      data: [],
      movie: []
    })
  }

  setImage = () => {
    const a = this.state.movie
    if (this.state.movie !== undefined) {
      const url = `https://image.tmdb.org/t/p/w500${a.poster_path}`
      return (
        <Image src={url} />
      )
    } else {
      return (
        <Image src={require('../images/background/no_img.png')} />
      )
    }
  }

  render() {
    const name = this.props.recommend.Name
    const genreType = capitalize(this.props.recommend.Type)
      return (
        <div>
          <Card style={style}>
            {this.setImage()}
            <Card.Content>
              <Card.Header>
                {name}
                </Card.Header>
                <Card.Meta>
                  <span className='date'>
                  </span>
                </Card.Meta>
                <Card.Description>
                {genreType}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <RecommendModal info={this.props.recommend.Name}/>
              </a>
            </Card.Content>
          </Card>
        </div>
    )
  }
}

const style = {
  float: 'left',
  padding: '10px',
  marginTop: '10px',
  marginBottom: '40px',
  marginLeft: '12px',
  margin: '1em'
}


export default RecommendMovie
