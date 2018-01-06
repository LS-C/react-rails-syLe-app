export default function weatherReducer(state={loading: false, weatherData: []}, action) {
  switch (action.type) {
    case 'LOADING_WEATHER':
    return Object.assign({}, state, {loading: true} )
    case 'FETCH_WEATHER':
      return {loading: false, weatherData: action.payload}
    default:
      return state
  }
}
