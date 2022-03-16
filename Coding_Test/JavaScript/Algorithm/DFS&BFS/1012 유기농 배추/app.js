const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")
const T = +input[0]
let z = 1
for(let i = 0;i<T;i++){
    let [M, N, K] = input[z].split(' ').map(Number)

    let graph = []

    for(let j = 0; j< N; j++){
        graph.push(new Array(M).fill(0))
    }
    let zk = z+K
    
    for(;z<zk;z++){
        let [y, x] = input[z+1].split(' ').map(Number)
        graph[x][y] = 1
    }
    z+=1


    const DFS = (x, y, count) => {
        if (x < 0 || y < 0 || x >= N || y >= M){
            return count
        }
        if (graph[x][y] === 0){
            return count
        }
        if(graph[x][y] === 1){
            count += 1
            graph[x][y] = 0
            count = DFS(x+1, y, count)
            count = DFS(x, y+1, count)
            count = DFS(x-1, y, count)
            count = DFS(x, y-1, count)
            return count
        }
    }

    let count = 0
    let final = []
    for (let j = 0; j<N;j++){
        for(let k=0;k<M;k++){
            count = DFS(j,k,count)
            if (count){
                final.push(count)
                count = 0
            }
        }
    }
    console.log(final.length)
}

