import React, { Component } from 'react';
import News from './News';

class NewsShow extends Component {

  renderNewsCategory = () => {
      if (this.props.loading) {
        return (
          <div><h3>{"Today's top news on "}{this.props.query}</h3><br/></div>
        )
      }
  }

  render() {
    return (
      <div className="news-container">
        {this.renderNewsCategory()}
        <div className="news-show">
          {this.props.articles.map(article =>
              <News key={article.id} article={article} />
          )}
        </div>
      </div>
    )
  }
}


export default NewsShow

NewsShow.defaultProps = {
  articles: [],
  loading: false
}
