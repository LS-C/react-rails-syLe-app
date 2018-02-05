import React, { Component } from 'react';
import { parseDate1 } from '../services/utils';
import { Input } from 'semantic-ui-react';
import store from 'store';
import '../containers/Profile.css'

class Profile extends Component {
    constructor() {
      super()

      this.state = {
        editEmail: false,
        email: ''
      }
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
    this.props.fetchProfile()
  }


  render() {
    const { first_name, last_name, email, created_at } = this.props.profile
    const { editEmail } = this.state
    return(
      <div className="profile">
        <p className="profile-inline">{first_name} {last_name}</p>
        {editEmail ?
        <div>
          <label htmlFor="Email:">Email: </label>
          <Input type='email' defaultValue={email}
          onChange={this.handleChange}
          className="profile-inline"/>
          <button className="button-submit"
            onClick={this.handleSubmit}>
            SUBMIT
          </button>
          <button className="button-x"
            onClick={this.handleEditEmailChange}>
            X
          </button>
        </div>
        :
        <div>
          <p className="profile-inline">Email: </p>
          <p className="profile-inline">{email}</p>

          <button className="button-submit" onClick={this.handleEditEmailChange}>EDIT</button>

        </div> }
        <p>Member Since: {parseDate1(created_at)}</p>
      </div>

    )
  }
}

export default Profile
