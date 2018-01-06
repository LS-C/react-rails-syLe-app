export default function manageProfile(state={loading: false, profile: []}, action) {
  switch (action.type) {
    case "LOADING_PROFILE":
      return Object.assign({}, state, {loading: true})
    case "FETCH_PROFILE":
      return { loading: false, profile: action.payload }
    default:
      return state
  }
}
