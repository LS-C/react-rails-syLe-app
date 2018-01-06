import React from 'react';
import { fetchSavedArticles } from '../actions/newz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from '../components/Articles';
import { Button } from 'semantic-ui-react';

class SavedArticlesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchSavedArticles()
  }

  render() {
    console.log(this.props)
    return(
      <div>
      <h4>You have {this.props.savedArticles.length} saved articles</h4>
      <Articles articles={this.props.savedArticles} fetchSavedArticles={this.props.fetchSavedArticles}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { savedArticles: state.news.savedArticles }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({ fetchSavedArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(SavedArticlesContainer)
