import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {

  render() {
    console.log(this.props.news)
    const list = this.props.news.map(article =>
      <Article news={article} />
    )
    return(
      <div>
        {list}
      </div>
    )
  }
}



export default Articles
