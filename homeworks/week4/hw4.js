// eslint-disable-next-line
const request = require('request');

request({
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    'Client-ID': '8lusklnds3i9sj81q8lx2w9mw42bzn',
    // eslint-disable-next-line
    'Accept': 'application/vnd.twitchtv.v5+json'
  }
}, (error, response, body) => {
  const json = JSON.parse(body)
  for (let i = 0; i < json.top.length; i++) {
    console.log(`${json.top[i].viewers} ${json.top[i].game.name}`)
  }
})
