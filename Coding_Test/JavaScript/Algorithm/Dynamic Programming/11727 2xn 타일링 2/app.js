const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const n = +input[0]

let arr = new Array(n+1).fill(0)

arr[1] = 1
arr[2] = 3

for(let i = 3; i<n+1; i++){
    arr[i] = (arr[i-1] + arr[i-2]*2)%10007
}

console.log(arr[n])