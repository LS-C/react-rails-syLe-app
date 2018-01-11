import React, {Component} from 'react';
import store from 'store';
import { login } from '../services/utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginStatus } from '../actions/login';
import { Form, Message } from 'semantic-ui-react';
import '../App.css'


class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      renderError: false
    }
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;

    const data = JSON.stringify({
      email: email,
      password: password
    });

    login(data)
    .then(res => {
      const { auth_token, id } = res;
      store.set('auth_token', auth_token );
      store.set('id', id );
      if (auth_token) {
        this.setState({ renderError: false })
        this.props.loginStatus()
        this.props.history.push('/')
      } else {
        this.setState({ renderError: true })
        console.log('error')
      }
    })
  }

  render() {
    return (
      <div className='login-form'>
      <h2 className="font">Log In</h2>
        <Form error onSubmit={this.handleSubmit}>
            <Form.Input onChange={this.handleChange}
            onFocus={this.handleOnFocus}
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
            {this.state.renderError ?
            <Message error content='Please enter valid e-mail address / password.' width={6}/>
            : null }
            <button className="button-submit" onSubmit={this.handleSubmit}>SUBMIT</button>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return { loggedStatus: state.login.loggedIn }
}

const mapDispatchToState = (dispatch) => {
  return bindActionCreators({ loginStatus }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(LoginPage);
