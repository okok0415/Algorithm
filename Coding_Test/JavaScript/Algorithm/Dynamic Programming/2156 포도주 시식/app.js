const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const  n = +input[0]
let arr = []
for(let i = 1;i<n+1;i++){
    arr.push(+input[i])
}
arr.map(Number)

let graph = new Array(n+1).fill(0)

graph[1] = arr[0]
graph[2] = arr[0]+arr[1]
for(let i = 3; i< n+1; i++){
    graph[i] = Math.max(graph[i-2] + arr[i-1], graph[i-3] + arr[i-2] + arr[i-1], graph[i-1])
}

console.log(Math.max(graph[n]))