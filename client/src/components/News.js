import React, { Component } from 'react';
import SaveArticlesButton from './SaveArticlesButton';
import { parseDate } from '../services/utils'


class News extends Component {

  render() {
    return(
      <div>
        <h3>{this.props.article.title}</h3> <br/>

        <p>{this.props.article.description}</p>
        <p>{parseDate(this.props.article.publishedAt)}</p>
        <p>{this.props.article.source.name}</p> <br/>
        <SaveArticlesButton article={this.props.article}/>

      </div>
    )
  }
}


export default News
