import React from 'react';
import { parseDate2 } from '../services/utils';

const TrendingArticle = (props) =>
  <div>
    <a href={props.article.url} target="_blank">{props.article.title}</a>
    <p>{props.article.description}</p>
    <p>{parseDate2(props.article.published_at)}</p>
    <p>{props.article.likes.length}</p>
  </div>


export default TrendingArticle
