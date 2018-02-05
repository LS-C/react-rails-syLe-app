import React from 'react';
import { parseDate2 } from '../services/utils';
import { Divider } from 'semantic-ui-react';

const TrendingArticle = (props) =>
  <div>
    <a href={props.article.url} target="_blank">{props.article.title}</a>
    <p>{parseDate2(props.article.published_at)}</p>
    <p>{props.article.likes.length}</p>
    <Divider section />
  </div>


export default TrendingArticle
