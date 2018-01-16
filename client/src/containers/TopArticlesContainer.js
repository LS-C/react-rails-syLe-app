// import React, { Component } from 'react';
// import TopArticle from '../components/TopArticle';
//
//
// class TopArticlesContainer extends Component {
//
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('props', this.props.topArticles)
//     console.log('nextProps', nextProps.topArticles)
//
//     return this.props.topArticles !== nextProps.topArticles
//   }
//
//
//
//   render() {
//     console.log('from toparticles', this.props.topArticles)
//     const top = this.props.topArticles.map((news, index) =>
//       <TopArticle key={index} index={index} article={news}/>
//     )
//     return(
//       <div className="top-articles">
//         {top}
//       </div>
//     )
//   }
// }
//
//
// export default TopArticlesContainer;
