import React, { Component } from 'react';
import News from './News';
import SaveArticlesButton from './SaveArticlesButton';
import '../containers/News.css';
import { Divider } from 'semantic-ui-react';

class NewsShow extends Component {

  _renderNewsCategory = () => {
      if (this.props.loading) {
        return (
          <div><h3>{"Today's top news on "}{this.props.query}</h3><br/></div>
        )
      }
  }

  render() {
    const news = this.props.articles.map((article, index)=>
    <div className="news-card" key={index}>
      <News article={article} />
        <Divider />
      <SaveArticlesButton article={article} fetchSavedArticles={this.props.fetchSavedArticles} />
    </div>
    )
    return (
      <div className="news-container">
            {news}
      </div>
    )
  }
}
// {this.renderNewsCategory()}


export default NewsShow

NewsShow.defaultProps = {
  articles: [],
  loading: false
}
