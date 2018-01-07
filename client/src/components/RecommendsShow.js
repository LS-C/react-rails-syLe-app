import React, { Component } from 'react';
import Recommend from './Recommend';

const RecommendsShow = (props) =>
  <div>
    {props.recommends.map(recommend =>
      <Recommend recommend={recommend} />
    )}
  </div>


export default RecommendsShow

RecommendsShow.defaultProps = {
  recommends: []
}
