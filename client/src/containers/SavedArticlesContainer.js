import React from 'react';
import { fetchSavedArticles } from '../actions/newz';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from '../components/Articles';

class SavedArticlesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchSavedArticles()
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.savedArticles === nextProps.savedArticles)
  }

  render() {
    console.log(this.props.savedArticles)
    return(
      <div>
        <Articles news={this.props.savedArticles} />
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
