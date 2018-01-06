import store from 'store';

export function fetchNews(query) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });
    const NEWS_API_KEY = ''
    const NEWS_URL =
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${NEWS_API_KEY}`
    return fetch(NEWS_URL)
    .then(res=>res.json())
    .then(json => dispatch({ type: 'FETCH_NEWS', payload: json.articles }))
  }
}

export function fetchNewsWithSource(query, source) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });
    const NEWS_API_KEY = ''
    const NEWS_URL =
    `https://newsapi.org/v2/everything?q=${query}&sources=${source}&languages=en&apiKey=${NEWS_API_KEY}`
    return fetch(NEWS_URL)
    .then(res=>res.json())
    .then(json => dispatch({ type: 'FETCH_NEWS', payload: json.articles }))
  }
}

export function fetchHeadlines(source) {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });
    const NEWS_API_KEY = ''
    const NEWS_URL =
    `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${NEWS_API_KEY}`
    return fetch(NEWS_URL)
    .then(res=>res.json())
    .then(json => dispatch({ type: 'FETCH_NEWS', payload: json.articles }))
  }
}

export function fetchSavedArticles() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });
    const id = store.get('id')
    return fetch(`http://localhost:3000/users/${id}/likes`)
    .then(res => res.json())
    .then(json=> dispatch({ type: 'FETCH_SAVED_ARTICLES', payload: json }))
  }
}

export function fetchTrendingArticles() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_NEWS' });
    return fetch('http://localhost:3000/toparticles')
    .then(res=>res.json())
    .then(json=> dispatch({ type: 'FETCH_TRENDING_ARTICLES', payload: compare(json) }))
  }
}

function compare(data) {
  const top_articles = data.sort(function(a, b) {
    return a.likes.length - b.likes.length;
  }).reverse();
  return top_articles
}
