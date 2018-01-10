import React, { Component } from 'react';
import { parseDate1 } from '../services/utils';
import { Form, Button, Input } from 'semantic-ui-react';
import store from 'store';

class Profile extends Component {

    state = {
      editEmail: false,
      email: ''
    }

  handleEditEmailChange = () => {
    this.setState({ editEmail: !this.state.editEmail})
  }

  handleChange = e => {
    this.setState({ email: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const id = store.get('id')
    const email = this.state.email
    const data = JSON.stringify({
      email
    })
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'put',
      headers: {'Content-Type':'application/json'},
      credentials: 'same-origin',
      body: data
    })
    .then(res=> res.json())
    .then( json => this.setState({ editEmail: false }))
  }



  render() {
    const spaceStyle={
      position: 'absolute',
      top: '10em'
    }

    const style={
      display: 'inline-block'
    }

    const { email, created_at } = this.props.profile
    const { editEmail } = this.state
    console.log(this.state.email)
    return(
      <div style={spaceStyle}>
        {editEmail ?
        <div>
          <label htmlFor="Email: ">Email: </label>
          <Input type='email' defaultValue={email} onChange={this.handleChange} style={{display: "inline-block", margin: '1em'}}/>
          <Button onClick={this.handleSubmit} size="medium" content="Submit"/>
        </div>
        :
        <div>
        <p style={{display: "inline-block", margin: '1em'}}>Email: {email}</p>
        <button onClick={this.handleEditEmailChange}>Edit</button>
        </div> }
        <p>Member Since: {parseDate1(created_at)}</p>
      </div>
    )
  }
}


export default Profile
