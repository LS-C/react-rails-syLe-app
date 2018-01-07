import React, { Component } from 'react';
import { parseDate1 } from '../services/utils';
import { Form } from 'semantic-ui-react';
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
    console.log(data)
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'put',
      headers: {'Content-Type':'application/json'},
      credentials: 'same-origin',
      body: data
    })
    .then(res=> res.json())
    .then( json => console.log(json))
  }



  render() {
    const spaceStyle={
      position: 'absolute',
      top: '10em'
    }
    const { email, created_at } = this.props.profile
    const { editEmail } = this.state
    console.log(this.state.email)
    return(
      <div style={spaceStyle}>
        {editEmail ?
        <div>
          <Form.Input label='Email' type='email' defaultValue={email} onChange={this.handleChange} />
          <Form.Button onClick={this.handleSubmit}>Submit</Form.Button>
        </div>
        :
        <div>
        <p>Email: {email}</p>
        <button onClick={this.handleEditEmailChange}>Edit</button>
        </div> }
        <p>Member Since: {parseDate1(created_at)}</p>
      </div>
    )
  }
}


export default Profile
