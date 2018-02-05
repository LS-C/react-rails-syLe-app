import React, {Component} from 'react';
import store from 'store';
import { login, signup } from '../services/utils';
import { Form, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginStatus } from '../actions/login';
import '../App.css'

class SignupPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      renderError: false
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { firstName, lastName, email, password, passwordConfirmation } = this.state;

    const data = JSON.stringify({
      "user": {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    });

    const loginData = JSON.stringify({
        email: email,
        password: password
    });

    signup(data)
    .then(json=>login(loginData))
    .then(json=> {
      const { auth_token, id } = json;
      store.set('auth_token', auth_token );
      store.set('id', id );
      if (auth_token) {
        this.props.loginStatus()
        this.props.history.push('/')
      } else {
        this.setState({ renderError: true })
      }
    })
}



  render() {
    return (
      <div className="signup-form">
      <h2 className="font">Sign Up</h2>
      <Form error onSubmit={this.handleSubmit}>

        <Form.Input onChange={this.handleChange}
        type="firstName"
        name="firstName"
        value={this.state.firstName} label='First Name' placeholder="Enter your First Name"
        width={4}/>
        <Form.Input onChange={this.handleChange}
        type="lastName"
        name="lastName"
        value={this.state.lastName} label='Last Name' placeholder="Enter your Last Name"
        width={4}/>


          <Form.Input onChange={this.handleChange}
          type="email"
          name="email"
          value={this.state.email} label='Email' placeholder="Enter your e-mail"
          width={4}/>
          <Form.Input onChange={this.handleChange}
          type="password"
          name="password"
          value={this.state.password}
          label='Password'
          placeholder="Enter your password"
          width={4}
           />
         <Form.Input onChange={this.handleChange}
         type="password"
         name="passwordConfirmation"
         value={this.state.passwordConfirmation}
         label='Password'
         placeholder="Confirm password"
         width={4}
          />
          <input name="authenticity_token" type="hidden" value="token_value" />
          {this.state.renderError ?
          <Message error content='Please enter valid e-mail address / password.' width={6}/>
          : null }
          <button className="button-submit" onSubmit={this.handleSubmit}>SUBMIT</button>
      </Form>
      </div>


    );
  }
}

const mapStateToProps = state => {
  return { loggedStatus: state.login.loggedIn }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ loginStatus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(SignupPage);
