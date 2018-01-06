export default function manageRecommends(state={loading: false, recommends: []}, action) {
  switch (action.type) {
    case 'LOADING_RECOMMENDS':
    return Object.assign({}, state, {loading: true} )
    case 'FETCH_RECOMMENDS':
      return {loading: false, recommends: action.payload}
    default:
      return state
  }
}
