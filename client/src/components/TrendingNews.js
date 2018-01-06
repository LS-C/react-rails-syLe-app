import React from 'react';
import { Segment, Divider } from 'semantic-ui-react';
import { parseDate1 } from '../services/utils';
import TrendingArticle from './TrendingArticle';


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
