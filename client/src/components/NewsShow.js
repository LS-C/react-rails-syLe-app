import React, { Component } from 'react';
import News from './News'



class NewsShow extends Component {

  renderNewsCategory = () => {
      if (this.props.loading) {
        return (
          <div><h3>{"Today's top news on "}{this.props.query}</h3><br/></div>
        )
      }
  }


  render() {
    const style= {
      position: 'absolute',
      top: '5em'
    }
    console.log(this.props)
    return (
      <div style={style}>
      {this.renderNewsCategory()}
      {this.props.articles.map(article=>
        <div>
          <News article={article} />
        </div>
      )}
      </div>
    )
  }
}


export default NewsShow

NewsShow.defaultProps = {
  articles: [],
  loading: false
}
