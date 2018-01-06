import React from 'react';
import RemoveArticleButton from './RemoveArticleButton'

const Articles = (props) =>
  <div>
    {props.articles.map(article =>
      <div>
        <a href={article.url} target="_blank">{article.title}</a>
        <p>{article.description}</p>
        <RemoveArticleButton article={article} fetchSavedArticles={props.fetchSavedArticles}/>
      </div>
    )}
  </div>


export default Articles
