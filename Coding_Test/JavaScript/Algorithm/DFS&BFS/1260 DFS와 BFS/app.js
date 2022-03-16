const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")

let [n,m,v] = input[0].split(' ').map(Number);
let graph = []
for(let i = 0;i< n+1;i++){
    graph.push([])
}


for(let i = 0 ; i< m; i++ ){
    let [a, b] = input[i+1].split(' ').map(Number);
    graph[a].push(b)
    graph[b].push(a)
}

graph.forEach(e => {
    e.sort((a, b) => a - b)
})

let visited = new Array(n+1).fill(0)
let answer_dfs = [];

function DFS(v) {
    if(visited[v]){
        return
    }
    visited[v] = 1
    answer_dfs.push(v);
    for(let i = 0; i< graph[v].length; i++){
        let next = graph[v][i];
        if (visited[next] === 0){
            DFS(next);
        }
    }

}
DFS(v);
console.log(answer_dfs.join(' '))

let answer_bfs = [];
visited.fill(0)
function BFS(v) {
    let queue = [v]
    while(queue.length){
        let x = queue.shift();
        if (visited[x] === 1){
            continue
        }
        visited[x] = 1
        answer_bfs.push(x);
        for(let i = 0; i < graph[x].length; i++){
            let next = graph[x][i];
            if(visited[next] === 0){
                queue.push(next)
            }
        }
    }
}
BFS(v);
console.log(answer_bfs.join(' '))