import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import '../containers/Recommends.css';
import '../App.css';

class RecommendsQueryBar extends Component {

  constructor() {
    super()

    this.state = {
      query: ""
    }
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state.query)
    this.setState({ query: "" })
  }

  render() {
    console.log('query', this.state.query)
    return (
      <div className="query-bar">
        <h2 className="font"> Artists, Books & Movies </h2>
        <form className="font" onSubmit={this.handleSubmit}>
          <Input size='small' type='text' placeholder='Search...' action value={this.state.query} onChange={this.handleChange}>
          <input />
            <button className="button-submit" onSubmit={this.handleSubmit}>SEARCH</button>
          </Input>
        </form>
      </div>
    )
  }
}

export default RecommendsQueryBar
