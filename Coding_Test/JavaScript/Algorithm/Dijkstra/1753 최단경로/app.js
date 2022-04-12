const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const [V, E] = input[0].split(' ').map(Number)
const K = +input[1]
const graph = []

for(let i = 0; i< V+1; i++){
    graph.push([])
}

for(let i = 2; i< E+2;i++){
    let [u, v, w] = input[i].split(' ')

    graph[u].push([Number(v), Number(w)])
}

let visited = new Array(V+1).fill(0)
const BFS = (final) => {
    let queue = [K]
    while(queue.length){

        let v = queue.shift()
        if(v === final){
            return visited[v]
        }

        for(g of graph[v]){
            if(visited[g[0]] === 0 ){
                visited[g[0]] = visited[v] + g[1]  
                queue.push(g[0])
            }
        }
    }  

    return 'INF'
}

for(let i = 1;i<V+1;i++){
    console.log(BFS(i))
    visited = new Array(V+1).fill(0)
}
