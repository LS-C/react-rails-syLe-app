import React, { Component } from 'react';
import { Input, Button } from 'semantic-ui-react';

class RecommendsQueryBar extends Component {

  state = {
      query: ""
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
    console.log(this.state.query)
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <Input size='small' type='text' placeholder='Search...' action value={this.state.query} onChange={this.handleChange}>
        <input />
          <Button type='submit'>Search</Button>
        </Input>
        </form>
      </div>
    )
  }
}

export default RecommendsQueryBar
