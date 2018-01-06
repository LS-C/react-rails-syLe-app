export default function manageLogin(state={ loggedIn: false }, action) {
  switch (action.type) {
    case "LOG_IN":
      return { loggedIn: true}
    case "LOG_OUT":
      return { loggedIn: false }
    default:
      return state
    }
}
