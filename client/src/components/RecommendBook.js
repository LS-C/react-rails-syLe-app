import React, { Component } from 'react';
import { Card, Image } from 'semantic-ui-react';
import RecommendModal from './RecommendModal';
import { capitalize, findMovie, fetchMovie } from '../services/utils';

class RecommendBook extends Component {

  render() {
    const name = this.props.recommend.Name
    const genreType = capitalize(this.props.recommend.Type)
      return (
        <div>
          <Card style={style}>
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


export default RecommendBook
