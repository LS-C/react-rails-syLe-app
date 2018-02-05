import React, { Component } from 'react';
import store from 'store';
import { connect } from 'react-redux';
import '../containers/News.css'

class SaveArticlesButton extends Component {

  constructor() {
    super()

    this.state = {
      saved: false
    }
  }

  componentDidMount() {
    const description = this.props.article.description
    this._checkSaved(description)
  }

  handleClick = e => {
    const id = store.get('id')
    this.handleSubmit(e, id)
  }

  handleSubmit  = (e, id) => {
    e.preventDefault()
    const { title, description, url, urlToImage, publishedAt } = this.props.article

    const data = JSON.stringify({
        title: title,
        description: description,
        url: url,
        url_image: urlToImage,
        published_at: publishedAt,
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
      .then(json=> this.saveArticle(json.id, id, description))
  }

  saveArticle = (articleId, id, description) => {
    const data = JSON.stringify({
        article_id: articleId,
        user_id: id,
        article_description: description,
    });
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
    .then(json=> this._checkSaved(description))
  }

  _checkSaved = (description) => {
    const list= this.props.savedArticles.filter(article =>
      article.description === description
    )
    if (list.length === 1) {
      this.setState({ saved: true })
    }
  }

  _renderButton = () => {
    if (this.state.saved) {
      return(
        <p style={{color: 'pink'}}>Article Saved</p>
      )
      } else {
        return (
          <button className="button-save" onClick={this.handleClick}>SAVE ARTICLE</button>

        )
      }
  }

  render() {
    return(
      <div className='news1'>
        {this._renderButton()}
      </div>
    )
  }
}

const mapStateToProps = state => {
    return { savedArticles: state.news.savedArticles }
}


export default connect(mapStateToProps, null)(SaveArticlesButton)
