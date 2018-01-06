import React from 'react';


const style= {
  position: 'absolute',
  top: '7em',
  left: '1em',
  color: 'white'
}

const SavedArticles = (props) =>
  <div style={style}>
    <h4>You have {props.savedArticles.length} saved articles</h4>
    <button>See saved articles</button>
  </div>


export default SavedArticles

SavedArticles.defaultProps = {
  savedArticles: []
}
