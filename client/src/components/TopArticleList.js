import React from 'react';
import { topTenArticles } from '../services/utils';
import TopArticle from './TopArticle';
import '../containers/TopArticles.css'

const TopArticleList = (props) => {
  const tenArticles = topTenArticles(props.topArticles)
  const articleList = tenArticles.map((news, index) =>
    <TopArticle key={index} index={index+1} article={news}/>
  )
  return(
    <div className="top-article-cards">
    <h3>Top 10 News</h3>
    {articleList}
    </div>
  )
}


export default TopArticleList
