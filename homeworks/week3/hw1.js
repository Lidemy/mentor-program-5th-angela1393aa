const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin
})

const lines = []

rl.on('line', (line) => {
  lines.push(line)
})

rl.on('close', () => {
  solve(lines)
})

function solve(n) {
  let str = ''
  for (let i = 1; i <= n; i++) {
    str += '*'
    console.log(str)
  }
}
