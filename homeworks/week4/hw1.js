// eslint-disable-next-line
const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  if (error) {
    console.log('error: ', error)
    return
  }
  let json
  try {
    json = JSON.parse(body)
  } catch (error) {
    console.log('error: ', error)
    return
  }

  for (let i = 0; i < json.length; i++) {
    console.log(`${json[i].id} ${json[i].name}`)
  }
})
