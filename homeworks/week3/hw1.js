var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin 
});

var lines = []

rl.on('line', function (line) {
  lines.push(line)
});

rl.on('close', function() {
  solve(lines)
})


function solve(n){
var str=''
for(i=1;i<=n;i++){
str+='*'
console.log(str)}
}

