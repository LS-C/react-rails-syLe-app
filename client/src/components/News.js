import React, { Component } from 'react';
import SaveArticlesButton from './SaveArticlesButton';
import { connect } from 'react-redux';
import { parseDate } from '../services/utils'


class News extends Component {

  render() {
    return(
      <div>
        <h3>{this.props.article.title}</h3> <br/>

        <p>{this.props.article.description}</p>
        <p>{parseDate(this.props.article.publishedAt)}</p>
        <p>{this.props.article.source.name}</p> <br/>
        {this.props.loggedIn ? <SaveArticlesButton article={this.props.article}/> : null}

      </div>
    )
  }
}

const mapStateToProps = state => {
  return { loggedIn: state.login.loggedIn}
}
export default connect(mapStateToProps)(News)
