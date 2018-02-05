import React from 'react';
import Article from './Article';

const Articles = (props) => {
  const list = props.news.map((article, index) =>
    <Article key={index} index={index+1} news={article} fetchSavedArticles={props.fetchSavedArticles} />
  )
  return(
    <div>
      {list}
    </div>
  )
}


export default Articles
