import React, { Component } from 'react';
import { fetchSavedArticles } from '../actions/newz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from '../components/Articles';
import store from 'store'


class SavedArticlesContainer extends Component {

  componentDidMount() {
    const token = store.get('auth_token')
    if (token === undefined) {
      this.props.history.push('/')
    } else {
      this.props.fetchSavedArticles()
    }
  }

  render() {
    return(
      <div>
        <Articles news={this.props.savedArticles} fetchSavedArticles={this.props.fetchSavedArticles} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedStatus: state.login.loggedIn,
    savedArticles: state.news.savedArticles,
    path: state.path.path
   }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({ fetchSavedArticles }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(SavedArticlesContainer);

SavedArticlesContainer.defaultProps = {
  savedArticles: []
}
