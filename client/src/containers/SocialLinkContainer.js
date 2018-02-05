import React from 'react';

const SocialLinkContainer = () =>
  <div>
    <a href="https://en-gb.facebook.com/login/" target="_blank"
    rel="noopener noreferrer" className="social-link-space">
       <img src={require('../images/brandIcons/facebook-logo.png')} alt=""
       style={{height: '2em', width: '2em'}}/>
     </a>
    <a href="https://www.instagram.com/?hl=en" target="_blank"
    rel="noopener noreferrer" className="social-link-space" >
       <img src={require('../images/brandIcons/instagram-logo.png')} alt=""
       style={{height: '3em', width: '3em'}}/>
     </a>
      <a href="https://twitter.com/" target="_blank"
      rel="noopener noreferrer" className="social-link-space">
        <img src={require('../images/brandIcons/twitter-logo.png')} alt=""
        style={{height: '2em', width: '2em'}}/>
      </a>
      <a href="https://www.linkedin.com/" target="_blank"
      rel="noopener noreferrer" className="social-link-space">
        <img src={require('../images/brandIcons/linkedin-logo.png')} alt=""
        style={{height: '2em', width: '2em'}}/>
      </a>
      <a href="https://plus.google.com/discover" target="_blank"
      rel="noopener noreferrer" className="social-link-space">
        <img src={require('../images/brandIcons/google-plus-logo.png')} alt=""
        style={{height: '2em', width: '2em'}}/>
      </a>
  </div>

export default SocialLinkContainer
