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
    const queryBar = {
       position: 'absolute',
       top: '30%',
       left: '50%',
       transform: 'translate(-50%, -50%)',
       fontFamily: "Montserrat"
    }
    return (
      <div style={queryBar}>
      <h2> Artist, Book & Movies </h2>
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
