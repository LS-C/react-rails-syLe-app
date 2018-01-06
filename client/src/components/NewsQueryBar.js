import React, { Component } from 'react';
import { Button, Select, Input } from 'semantic-ui-react';
import { options, changeSourceFormat } from '../services/utils'

class NewsQueryBar extends Component {
  state = {
    query: "",
    source: "all"
  }

  handleChange = e => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.handleOnSubmit(this.state.query, this.state.source)
    this.setState({ query: "" })
  }

  handleOptionsChange = event => {
    const source = changeSourceFormat(event.target.innerText)
    this.setState({ source })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <Input size='small' type='text' placeholder='Search...' value={this.state.query} onChange={this.handleChange} action>
        <input />
        <Select compact options={options} defaultValue='all'  onChange={this.handleOptionsChange} style={{width: '120px'}}/>
          <Button type='submit'>Search</Button>
        </Input>
        </form>
      </div>
    )
  }

}

export default NewsQueryBar
