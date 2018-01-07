import React from 'react';
import { Card, Icon  } from 'semantic-ui-react';
import RecommendModal from './RecommendModal';


class Recommend extends React.Component {


  render() {
    return(
      <div>
        <Card>
          <Card.Content>
            <Card.Header>
              {this.props.recommend.Name}
              </Card.Header>
              <Card.Meta>
                <span className='date'>
                </span>
              </Card.Meta>
              <Card.Description>
              {this.props.recommend.Type}
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

export default Recommend
