const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")

const N = +input[0]

let graph = []

for(let i = 0; i< N; i++){
    graph.push(input[i+1].split('').map(Number))
    if (graph[i][N] === 0){
        graph[i].pop()
    }
}


const DFS = (x, y, count) => {
    if ( x< 0 || y < 0 || x >= N || y >= N){
        return count
    }
    if (graph[x][y] == 1){
        count += 1
        graph[x][y] = 0
        count = DFS(x+1, y, count)
        count = DFS(x-1, y, count)
        count = DFS(x, y+1, count)
        count = DFS(x, y-1, count)
        return count
    }
    return count

}


let count = 0
let final = []
for (let i = 0; i<N;i++){
    for (let j = 0; j<N;j ++){
        count = DFS(i, j, count)
        if (count){
            final.push(count)
            count = 0
        }
    }
}

console.log(final.length)
final.sort((a, b) => a - b)
console.log(final.join('\n'))