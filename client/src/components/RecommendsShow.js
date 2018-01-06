import React from 'react';

const RecommendsShow = (props) =>
  <div>
    {props.recommends.map(recommend =>
      <div>
        <p>{recommend.Name}</p>
        <p>Genre: {recommend.Type}</p><br/>
      </div>
    )}
  </div>

export default RecommendsShow

RecommendsShow.defaultProps = {
  recommends: []
}
