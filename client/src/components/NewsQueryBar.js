import React, { Component } from 'react';
import { Select, Input } from 'semantic-ui-react';
import { options, changeSourceFormat } from '../services/utils';
import '../App.css'

class NewsQueryBar extends Component {
  state = {
    query: "",
    source: "all",
    sourceLength: ""
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
    const sourceLength = source.count
    this.setState({
      source,
      sourceLength
     })
  }

  buttonClassNames = () => {
    if (this.state.source.length < 14 ) {
      return 'button-submit'
    } else {
      return 'button-submit-1'
    }
  }

  render() {
    const btnClass = this.buttonClassNames()
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <Input size='small' type='text' placeholder='Search...' value={this.state.query} onChange={this.handleChange} action>
        <input />
        <Select compact options={options} defaultValue='all'  onChange={this.handleOptionsChange} style={{width: '160px'}}/>
          <button className={btnClass} onSubmit={this.handleSubmit}>SEARCH</button>

        </Input>
        </form>
      </div>
    )
  }

}

export default NewsQueryBar
