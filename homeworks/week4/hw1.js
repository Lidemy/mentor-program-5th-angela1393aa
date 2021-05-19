// 因無法解析模塊“請求”的路徑，所以加下一行
// eslint-disable-next-line
const request = require('request')

request('https://lidemy-book-store.herokuapp.com/books?_limit=10', (error, response, body) => {
  if (error) {
    console.log('error: ', error)
    return
  }
  let json
  try {
    if (response.statusCode >= 200 && response.statusCode < 300) {
      json = JSON.parse(body)
      console.log('http status code :', response.statusCode)
    }
  } catch (error) {
    console.log('error: ', error)
    return
  }

  for (let i = 0; i < json.length; i++) {
    console.log(`${json[i].id} ${json[i].name}`)
  }
})
