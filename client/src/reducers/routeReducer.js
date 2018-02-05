export default function routeReducer( state={ path: "" }, action) {
  switch (action.type) {
    case 'SET_ROUTE':
      return { path: action.payload }
    case 'RESET_ROUTE':
      return { path: "" }
    default:
      return state
  }
}
