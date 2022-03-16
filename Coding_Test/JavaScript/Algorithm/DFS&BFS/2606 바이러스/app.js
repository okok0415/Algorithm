const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")

const N = Number(input[0])
const M = Number(input[1])

const graph = []

for(let i = 0; i< N+ 1; i++){
    graph.push([])
}

for(let i = 0; i < M;i++) {
    let [a, b] = input[i+2].split(' ').map(Number)
    graph[a].push(b)
    graph[b].push(a)
}

graph.forEach(e => {
    e.sort((a, b) => a - b)
})

let flag  = new Array(N+1).fill(0)
let historyBook = []

const DFS = (v) => {
    if(flag[v]){
        return 
    }
    flag[v] = 1
    historyBook.push(v)

    for(g of graph[v]){
        if (flag[g] === 0){
            DFS(g)
        }
    }
}

DFS(1);

console.log(historyBook.length -1)