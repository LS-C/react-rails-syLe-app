export default function manageNews(state={loading: false, articles: [], savedArticles: [], trendingArticles: []}, action) {
  switch (action.type) {
      case 'LOADING_NEWS':
        return Object.assign({}, state, {loading: true} )
      case 'FETCH_NEWS':
        return { loading: true , articles: action.payload }
      case 'FETCH_SAVED_ARTICLES':
        return Object.assign({}, state, {loading: true, savedArticles: action.payload} )
      case 'FETCH_TRENDING_ARTICLES':
        return Object.assign({}, state, {loading: true, trendingArticles: action.payload} )
      default:
        return state
  }
}
