import React from 'react';
import { Segment } from 'semantic-ui-react';
import TrendingArticle from './TrendingArticle';

const TrendingNews = (props) =>
  <div>
    <Segment>
      {props.articles.map(article =>
          <TrendingArticle key={article.id} article={article}/>
      )}
    </Segment>
  </div>


export default TrendingNews

TrendingNews.defaultProps = {
  articles: []
}
