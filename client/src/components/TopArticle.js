import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import { parseDate2 } from '../services/utils';


class TopArticle extends Component {


  // callApi() {
  //   const id = store.get('id')
  //   console.log('a')
  //   fetch(`http://localhost:3000/users/${id}/likest`)
  //   .then(res=> {
  //     if (res.status !== 200) {
  //       throw new Error('error')
  //     } else {
  //       console.log('b')
  //       return res.json()
  //     }
  //   })
  //   .then(json=> console.log('c', json))
  //   .catch(err => console.log('d', err))
  //   console.log('e')
  // }

  render() {
    return(
      <Card>
        <Card.Content header={this.props.index +'. ' + this.props.article.title} />
        <Card.Content description={this.props.article.description} />
        <p>{parseDate2(this.props.article.published_at)}</p>
       </Card>
    )
  }
}

// const TopArticle = (this.props) =>
//

export default TopArticle
