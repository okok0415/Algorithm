const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]

const graph = new Array(N+1).fill(0)

for(let i = 1; i< N+1;i++){
    graph[i] = +input[i]
}

const dp = new Array(N+1).fill(0)
dp[1] = graph[1]
dp[2] = graph[1] + graph[2]
dp[3] = graph[1] + graph[3]

for(let i = 4; i< N+1; i++){
    dp[i] = Math.max(dp[i-3] + graph[i-1] + graph[i], dp[i-2] + graph[i] )
} 


console.log(dp[N])