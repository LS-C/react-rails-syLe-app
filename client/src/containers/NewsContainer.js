import React from 'react';
import NewsQueryBar from '../components/NewsQueryBar';
import NewsShow from '../components/NewsShow';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews, fetchNewsWithSource, fetchHeadlines } from '../actions/news';

class NewsContainer extends React.Component {

  state = {
    query: "",
    source: "",
    articles: []
  }



  handleOnSubmit = (query, source) => {
    this.setState({ query, source })
    console.log(source)
    if (source === 'all') {
      this.props.fetchNews(query)
    } else if (query !=='' && source){
      this.props.fetchNewsWithSource(query, source)
    } else if (query ==="" && source) {
      this.props.fetchHeadlines(source)
    }
  }

  render() {
    const style= {
      position: 'absolute',
      top: '16em',
      right: '1em'
    }
    return (
      <div style={style}>
        <NewsQueryBar handleOnSubmit={this.handleOnSubmit}/>
        <NewsShow query={this.state.query} loading={this.props.loading} articles={this.props.articles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.news.articles,
    loading: state.news.loading,
    savedArticles: state.news.savedArticles
   }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({ fetchNews, fetchNewsWithSource, fetchHeadlines }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(NewsContainer)
