import React, { Component } from 'react';
import NewsQueryBar from '../components/NewsQueryBar';
import NewsShow from '../components/NewsShow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews, fetchNewsWithSource, fetchHeadlines, fetchAllNews } from '../actions/newz';

class NewsContainer extends Component {

  constructor() {
    super()

    this.state = {
      query: "",
      source: ""
    }
  }


  handleOnSubmit = (query, source) => {
    this.setState({ query, source })
    if (query === "" && source === 'all') {
      this.props.fetchNews()
    } else if (query !== "" && source === 'all') {
      this.props.fetchAllNews(query)
    } else if (query !=='' && source) {
      this.props.fetchNewsWithSource(query, source)
    } else if (query ==="" && source) {
      this.props.fetchHeadlines(source)
    }
  }

  render() {
    return (
      <div style={style1}>
        <NewsQueryBar handleOnSubmit={this.handleOnSubmit}/>
        <NewsShow query={this.state.query} loading={this.props.loading} articles={this.props.articles} fetchSavedArticles={this.props.fetchSavedArticles}/>
      </div>
    )
  }
}

const style1= {
  position: 'absolute',
  top: '30%',
  left: '25%',
  right: '35%',
  transform: 'translate(-50%, -50%)',
  fontFamily: "Montserrat",
}

const mapStateToProps = (state) => {
  return {
    articles: state.news.articles,
    loading: state.news.loading
   }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({ fetchNews, fetchNewsWithSource, fetchHeadlines, fetchAllNews }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(NewsContainer)
