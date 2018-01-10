import React, { Component } from 'react';
import Recommend from './Recommend';

const style= {
  marginTop: '16em',
  marginLeft: '4em',
  color: 'black',
  fontFamily: "Montserrat"
}

const RecommendsShow = (props) =>
  <div style={style}>
    {props.recommends.map(recommend =>
      <Recommend recommend={recommend} />
    )}
  </div>


export default RecommendsShow

RecommendsShow.defaultProps = {
  recommends: []
}
