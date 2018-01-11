import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../actions/login';

class NavBar extends Component {

  render() {
    const linkStyle = {
      margin: '1em',
      color: 'black',
      fontFamily: 'Montserrat',
      fontSize: '12.4px'
    }

    return(
      <div>
      <Menu className="font-size">
        <Menu.Item name='home'>
          <NavLink to="/" exact style={linkStyle}>Home</NavLink>
        </Menu.Item>

        <Menu.Item name='News & Stories'>
            <Dropdown item text='News & Stories'>
              <Dropdown.Menu>
                <Dropdown.Item style={linkStyle}>Electronics</Dropdown.Item>
                {this.props.loggedStatus ?
                  <div>
                <Dropdown.Item>
                  <NavLink to="/toparticles" exact style={linkStyle}>Trending Articles</NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  <NavLink to='/articles' exact style={linkStyle}>
                  Saved articles
                  </NavLink>
                </Dropdown.Item>
                </div>
                :
                null }
              </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item name='recommendations'>
        <Dropdown item text='Recommendations'>
        <Dropdown.Menu>
        <Dropdown.Item style={linkStyle}>Electronics</Dropdown.Item>
        {this.props.loggedStatus ?
          <Dropdown.Item>
          <NavLink to="/recommendations" exact style={linkStyle}>Recommendations</NavLink>
          </Dropdown.Item>
          :
          null }
          </Dropdown.Menu>
          </Dropdown>
          </Menu.Item>

        {!this.props.loggedStatus ?
        <Menu.Menu position='right'>
          <Menu.Item name='signup'>
           <NavLink to="/signup" exact style={linkStyle}>Signup</NavLink>
          </Menu.Item>

          <Menu.Item name='login'>
          <NavLink to="/login" exact style={linkStyle}>Login</NavLink>
          </Menu.Item>
          </Menu.Menu>
          :
          null
          }
          {this.props.loggedStatus ?
          <Menu.Menu position='right'>
            <Menu.Item name='profile' >
             <NavLink to="/profile" exact style={linkStyle} >
            <i className="user circle icon"></i>
             </NavLink>
            </Menu.Item>
            <Menu.Item name='logout' >
             <NavLink to="/" exact style={linkStyle}
             onClick={this.props.logout} >Logout</NavLink>
            </Menu.Item>
          </Menu.Menu>
            :
            null
            }
      </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loggedStatus: state.login.loggedIn,
    articles: state.news.savedArticles
  }
}

const mapDispatchToState = dispatch => {
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToState)(NavBar);
