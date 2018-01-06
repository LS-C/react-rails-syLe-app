import store from 'store';

export function loginStatus() {
  const token = store.get('auth_token')
  if (token) {
    return {
      type: "LOG_IN"
    }
  } else {
    console.log('error')
  }
}

export function logout() {
    store.remove("auth_token")
    return ({ type: 'LOG_OUT' });
}
