import React, {Component} from 'react';
import store from 'store';
import { login } from '../services/utils';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginStatus } from '../actions/login';
import { Form } from 'semantic-ui-react';

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
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
        this.props.loginStatus()
        this.props.history.push('/')
      } else {
        console.log('error')
      }
    })
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths='equal'>
            <Form.Input onChange={this.handleChange}
            type="email"
            name="email"
            value={this.state.email} label='Email' placeholder="Enter your e-mail" />
            <Form.Input onChange={this.handleChange}
            type="password"
            name="password"
            value={this.state.password}
            label='Password'
            placeholder="Enter your password"
             />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
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
