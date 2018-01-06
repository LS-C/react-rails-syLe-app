import store from 'store'

export function fetchProfile() {
  const id = store.get('id')
  return (dispatch) => {
    dispatch ({ type: "LOADING_PROFILE"});
      return fetch(`http://localhost:3000/users/${id}`)
      .then(res => res.json())
      .then(json => dispatch({ type: "FETCH_PROFILE", payload: json}))
  }
}
