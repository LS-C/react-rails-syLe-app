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

export function parseDate2(date) {
  const a = new Date(date).toUTCString()
  return a.split(" ").slice(1,4).join(" ")
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
  .then(res => res.json)
}
