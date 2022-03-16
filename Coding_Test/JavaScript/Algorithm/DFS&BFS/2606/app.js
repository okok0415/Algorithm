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

let visited  = new Array(N+1).fill(0)
let answer_dfs = []

const DFS = (v) => {
    if (visited[v]){
        return
    }

    visited[v] = 1
    answer_dfs.push(v)
    for(let i = 0; i < graph[v].length ;i++){
        let next = graph[v][i]
        if (visited[i] == 0){
            DFS(next);
        }
    }

}

DFS(1);

console.log(answer_dfs.join(' '))