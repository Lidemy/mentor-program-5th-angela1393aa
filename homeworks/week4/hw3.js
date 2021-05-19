// eslint-disable-next-line
const request = require('request')
// eslint-disable-next-line
const process = require('process')
// eslint-disable-next-line
const name = process.argv[2]

const isName = () => {
  if (!name) {
    return console.log('請輸入國家名稱')
  }
}

isName()

request(`https://restcountries.eu/rest/v2/name/${name}`, (error, response, body) => {
  if (error) {
    return console.log('error :', error)
  }

  const json = JSON.parse(body)

  if (json.status === 404) {
    return console.log('找不到國家資訊')
  }

  for (let i = 0; i < json.length; i++) {
    console.log('============')
    console.log('國家：', json[i].name)
    console.log('首都：', json[i].capital)
    console.log('貨幣：', json[i].currencies[0].code)
    console.log('國碼：', json[i].callingCodes[0])
  }
})
