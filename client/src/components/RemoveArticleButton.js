import React, { Component } from 'react';
import store from 'store';
import { removeArticle } from '../services/utils'

class RemoveArticleButton extends Component {

  handleClick = () => {
    const { id, description } = this.props.article
    const userId = store.get('id')
    removeArticle(id, userId, description)
    .then(json => this.props.fetchSavedArticles())
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handleClick}>Remove Article</button>
      </div>
    )
  }
}



export default RemoveArticleButton
