const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]

let graph = []
for(let i = 1; i< N+1; i++){
    graph.push(input[i].split('').map(Number))
}

const dx = [-1, 1, 0, 0]
const dy = [0, 0, -1, 1]


const DFS = (x, y, count) => {
    if(graph[x][y] === 0){
        return count
    }
    graph[x][y] = 0
    count += 1

    for(let i = 0; i< 4; i++){
        
        nx = x+dx[i]
        ny = y+dy[i]

        if(nx < 0 || ny < 0 || nx >= N || ny >= N || graph[nx][ny] === 0) continue
        if(graph[nx][ny] === 1){
            count = DFS(nx, ny, count)
        }
    }
    return count       
}
let r = []
for(let i = 0; i<N;i++){
    for(let j = 0; j<N; j++){
        let result = DFS(i, j, 0)
        if(result){
            r.push(result)
        }
    }
}
console.log(r.length)
r.sort((a, b) => a - b)
for(i of r){
    console.log(i)
}