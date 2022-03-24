
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]

let graph = new Array(N+1).fill(0)


graph[1] = 1
graph[2] = 2
graph[3] = 2

for(let i = 4; i<N+1;i++){
    if(i%3 === 0 && i%2 === 0){
        graph[i] = Math.min(graph[i/3], graph[i/2], graph[i-1]) + 1
        continue
    }
    if(i%3 === 0){
        graph[i] = Math.min(graph[i/3], graph[i-1]) + 1
        continue
    }
    if(i%2 === 0){
        graph[i] = Math.min(graph[i/2], graph[i-1]) + 1
        continue
    }

    graph[i] = graph[i-1] + 1
}

console.log(graph[N]-1)