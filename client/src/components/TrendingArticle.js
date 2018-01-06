import React from 'react';

const TrendingArticle = (props) =>
  <div>
    <p>{props.article.title}</p>
    <p>{props.article.description}</p>
    <p>{props.article.url}</p>
    <p>{props.article.likes.length}</p>
  </div>


export default TrendingArticle
