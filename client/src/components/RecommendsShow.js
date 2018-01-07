import React from 'react';

const RecommendsShow = (props) =>
  <div>
    {props.recommends.map(recommend =>
      <div>
      <p>Genre: {recommend.Type}</p><br/>
        <p>{recommend.Name}</p>
      </div>
    )}
  </div>

export default RecommendsShow

RecommendsShow.defaultProps = {
  recommends: []
}
