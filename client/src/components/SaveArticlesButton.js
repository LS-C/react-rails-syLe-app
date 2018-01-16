import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react';
import store from 'store';
import { fetchSavedArticles } from '../actions/news';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SaveArticlesButton extends Component {

  handleClick = e => {
    const id = store.get('id')
    this.handleSubmit(e, id)
  }

  handleSubmit  = (e, id) => {
    e.preventDefault()

    const data = JSON.stringify({
        title: this.props.article.title,
        description: this.props.article.description,
        url: this.props.article.url,
        published_at: this.props.article.publishedAt,
        id: id
    });

    //move this.saveArticle and fetch function into services folder
      fetch("http://localhost:3000/articles", {
        method: "post",
        credentials: 'same-origin',
        headers: {
          'Content-Type':'application/json',
        },
        body: data
      })
      .then( res => res.json() )
      .then(json=> this.saveArticle(json.id, id, this.props.article.description))
  }

  saveArticle = (articleId, id, description) => {
    const data = JSON.stringify({
        article_id: articleId,
        user_id: id,
        article_description: description
    });
    console.log(data)
    fetch(`http://localhost:3000/like`, {
      method: "post",
      credentials: 'same-origin',
      headers: {
        'Content-Type':'application/json',
      },
      body: data
    })
    .then( res => res.json() )
    .then(json=> this.props.fetchSavedArticles())
  }

  render() {
    return(
      <div>
        <form>
          <Rating maxRating={1} icon='star' size='small' onClick={this.handleClick}/>
        </form>
      </div>
    )
  }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ fetchSavedArticles }, dispatch )
}

export default connect(null, mapDispatchToState)(SaveArticlesButton)
