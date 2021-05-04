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

function compare(a, b, p) {
  if (a === b) return 'DRAW'
  if (p === -1) {
    const temp = a
    a = b
    b = temp
  }

  const lengthA = a.length
  const lengthB = b.length

  if (lengthA !== lengthB) {
    return lengthA > lengthB ? 'A' : 'B'
  }
  for (let j = 0; j < lengthA; j++) {
    if (a[j] === b[j]) {
      continue
    }
    return a[j] > b[j] ? 'A' : 'B'
  }
}

function solve(lines) {
  const m = Number(lines[0])
  for (let i = 1; i <= m; i++) {
    const [a, b, p] = lines[i].split(' ')
    console.log(compare(a, b, p))
  }
}
