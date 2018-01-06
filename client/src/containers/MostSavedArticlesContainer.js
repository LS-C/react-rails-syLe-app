import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrendingArticles } from '../actions/newz'
import TrendingNews from '../components/TrendingNews'


class MostSavedArticlesContainer extends Component {

  componentDidMount() {
      this.props.fetchTrendingArticles()
  }



  render() {
    const articles=this.props.articles.filter(article =>
      article.likes.length>0
    )
    return(
      <div>
        <TrendingNews articles={articles} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { articles: state.news.trendingArticles }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchTrendingArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MostSavedArticlesContainer)
