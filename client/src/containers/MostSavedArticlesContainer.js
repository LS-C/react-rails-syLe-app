import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrendingArticles } from '../actions/newz'
import TrendingNews from '../components/TrendingNews'


class MostSavedArticlesContainer extends Component {

  componentDidMount() {
      this.props.fetchTrendingArticles()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.articles !== nextProps.articles
  }


  filterArticleList = () => {
    const a = this.props.articles.filter(article => {
      return article.likes.length > 0
    })
    return a
  }

  render() {
    console.log('from mostSavedArticlesContainer', this.props.articles)
    // const a = this.props.articles.filter(article => {
    //   return article.likes.length > 0
    // })
    return(
      <div>
        <TrendingNews articles={this.filterArticleList()} />
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

MostSavedArticlesContainer.defaultProps = {
  articles: []
}
