export default function manageNews(state={loading: false, articles: [], savedArticles: [], trendingArticles: []}, action) {
  switch (action.type) {
      case 'LOADING_NEWS':
        return Object.assign({}, state, {loading: true} )
      case 'FETCH_NEWS':
        return Object.assign({}, state, { loading: false , articles: action.payload } )
      case 'FETCH_SAVED_ARTICLES':
        return Object.assign({}, state, {loading: false, savedArticles: action.payload} )
      case 'FETCH_TRENDING_ARTICLES':
        return Object.assign({}, state, {loading: false, trendingArticles: action.payload} )
      case 'REMOVE_ARTICLES':
        return Object.assign({}, state, { loading: false , articles: [] } )
      default:
        return state
  }
}
