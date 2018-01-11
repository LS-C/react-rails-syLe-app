import React from 'react';
import { Card } from 'semantic-ui-react';
import RecommendModal from './RecommendModal';
import '../App.css'


class Recommend extends React.Component {

  render() {
    const style = {
      float: 'left',
      padding: '10px',
      marginTop: '10px',
      marginBottom: '40px',
      marginLeft: '12px',
      margin: '1em'
    }

    return(
      <div>
        <Card style={style}>
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
