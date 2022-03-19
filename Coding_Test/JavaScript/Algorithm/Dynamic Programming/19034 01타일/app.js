const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")

N = +input[0]
let result = new Array(N+1).fill(0)

result[1] = 1
result[2] = 2
result[3] = 3

for(let i=4;i<=N;i++){
    result[i] = (result[i-1] + result[i-2])%15746;
}

console.log(result[N])