export function login(data) {

  return fetch('http://localhost:3000/login', {
    method: 'post',
    headers: {'Content-Type':'application/json'},
    credentials: 'same-origin',
    body: data
  })
  .then(res=> res.json())
}

export function signup(data) {
  return fetch("http://localhost:3000/signup", {
    method: "post",
    credentials: 'same-origin',
    headers: {
      'Content-Type':'application/json',
    },
    body: data
  })
  .then( res => res.json() )
}

export function changeSourceFormat(string) {
  return string.toLowerCase().split(" ").join('-')
}

export const options = [
  { key: 'all', text: 'All', value: 'all' },
  { key: 'bbc-news', text: 'BBC News', value: 'bbc-news' },
  { key: 'cnn', text: 'CNN', value: 'cnn' },
  { key: 'the-economist', text: 'The Economist', value: 'the-economist' },
  { key: 'google-news', text: 'Google News', value: 'google-news' },
  { key: 'mashable', text: 'Mashable', value: 'mashable' },
  { key: 'national-geographic', text: 'National Geographic', value: 'national-geographic' },
  { key: 'the-huffington-post', text: 'The Huffington Post', value: 'the-huffington-post' },
  { key: 'the-new-york-times', text: 'The New York Times', value: 'the-new-york-times' },
  { key: 'the-verge', text: 'The Verge', value: 'the-verge' },
  { key: 'wired', text: 'Wired', value: 'wired' }
]


export function parseDate(date) {
  return new Date(date).toUTCString()
}

export function parseDate1(date) {
  const a = new Date(date).toUTCString()
  return a.split(" ").slice(2,4).join(", ")
}

export function parseDate2(data) {
  const date = []
  const dateString = new Date(data).toUTCString().split(" ").slice(1,4)
  date.push(dateString[1], dateString[0])
  const year = ", " + dateString[2]
  return date.join(" ").concat(year)
}

export function removeArticle(articleId, id, description) {
  const data = JSON.stringify({
      article_id: articleId,
      user_id: id,
      article_description: description
  });

  return fetch('http://localhost:3000/unlike', {
    method: "delete",
    credentials: 'same-origin',
    headers: {
      'Content-Type':'application/json',
    },
    body: data
  })
  .then(res => res.json())
}

export function fetchContent(q) {
  return fetch(`https://en.wikipedia.org/w/api.php?&origin=*&action=opensearch&search=${q}&limit=5`)
  .then(res => res.json())
}

export function topTenArticles(data) {
  return data.slice(0, 10)
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}


export function fetchMovie(data) {
  const query = data
  const q = setQuery(query)
  const API_KEY = ENV_KEY
  return fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}`)
  .then(res=>res.json())
}

export function findMovie(data, query) {
  var a = []
  a = data.filter(movie =>
      movie.title.toLowerCase() === query.toLowerCase()
    )
  if (a.length === 0 ) {
    a = data.filter(movie =>
        movie.title.toLowerCase().includes(query.toLowerCase())
      )
  }
  return a
}

function setQuery(string) {
  var query = string.toLowerCase().split(" ")
  var q = []
  if (query[0] !== 'the' && query[0] !== 'a' && query[0] !== 'an') {
    q = query[0]
  } else {
    q = query[1]
  }
  return q
}
