import React, { Component } from 'react';
import TopArticleList from '../components/TopArticleList';
import { fetchTrendingArticles } from '../actions/newz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './TopArticles.css'


class TopArticlesContainer extends Component {

  componentDidMount() {
    this.props.fetchTrendingArticles()
  }

  render() {
    return(
      <div className="top-articles">
        <TopArticleList topArticles={this.props.topArticles} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { topArticles: state.news.trendingArticles }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ fetchTrendingArticles }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToState)(TopArticlesContainer);
