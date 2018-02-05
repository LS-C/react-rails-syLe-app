import React from 'react';
import { Card } from 'semantic-ui-react';
import RecommendModal from './RecommendModal';
import { capitalize } from '../services/utils';

const Recommend = (props) => {
  const name = props.recommend.Name
  const genreType = capitalize(props.recommend.Type)
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
            <RecommendModal info={props.recommend.Name}/>
          </a>
        </Card.Content>
      </Card>
    </div>
  )
}

  const style = {
    float: 'left',
    padding: '10px',
    marginTop: '10px',
    marginBottom: '40px',
    marginLeft: '12px',
    margin: '1em'
  }

export default Recommend
