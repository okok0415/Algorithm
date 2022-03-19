const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
let result = []

for(let i = 0; i< N ; i++){
    result.push(input[i+1].split(' ').map(Number))
}

for(let i= 1; i< N;i++){
    result[i][0] = Math.min(result[i-1][1], result[i-1][2]) + result[i][0]
    result[i][1] = Math.min(result[i-1][0], result[i-1][2]) + result[i][1]
    result[i][2] = Math.min(result[i-1][0], result[i-1][1]) + result[i][2]
}


console.log(Math.min(...result[N-1]))