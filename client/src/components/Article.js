import React from 'react';
import { Divider } from 'semantic-ui-react';
import RemoveArticleButton from './RemoveArticleButton';


const Article = (props) =>
  <div>
    <a href={props.news.url} target="_blank">{props.news.title}</a>
    <p>{props.news.description}</p>
    <RemoveArticleButton article={props.news} fetchSavedArticles={props.fetchSavedArticles}/>
    <Divider />
  </div>


export default Article
