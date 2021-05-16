// eslint-disable-next-line
const request = require('request')
// eslint-disable-next-line
const process = require('process')
// eslint-disable-next-line
const name = process.argv[2]

request(`https://restcountries.eu/rest/v2/name/${name}`, (error, response, body) => {
  const json = JSON.parse(body)
  for (let i = 0; i < json.length; i++) {
    console.log('============')
    console.log('國家：', json[i].name)
    console.log('首都：', json[i].capital)
    console.log('貨幣：', json[i].currencies[0].code)
    console.log('國碼：', json[i].callingCodes[0])
  }
})
