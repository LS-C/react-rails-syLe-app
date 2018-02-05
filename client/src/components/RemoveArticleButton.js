import React, { Component } from 'react';
import store from 'store';
import { removeArticle } from '../services/utils';

import '../App.css';


class RemoveArticleButton extends Component {

  handleClick = () => {
    const id = this.props.article.id
    const description = this.props.article.description
    const userId = store.get('id')
    removeArticle(id, userId, description)
    .then(json => this.props.fetchSavedArticles())
  }

  render() {
    return (
      <div>
        <button className="button-remove" onClick={this.handleClick}>Remove Article</button>
      </div>
    )
  }
}



export default RemoveArticleButton
