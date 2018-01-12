import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import TrendingArticle from './TrendingArticle';
import { Link } from 'react-router-dom';


const TrendingNews = (props) =>
  <div>
    <Segment>
      {props.articles.map(article =>
        <div>
          <TrendingArticle article={article}/>
          <Divider section />
        </div>
      )}
    </Segment>
  </div>


export default TrendingNews

TrendingNews.defaultProps = {
  articles: []
}
