const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]

let graph = []
for (let i =1;i<N+1;i++){
    graph.push(input[i].split('').map(Number))
}


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

const DFS  = (x, y, count) => {
    if(graph[x][y] === 0){
        return count
    }
    count += 1
    graph[x][y] = 0
    
    for(let i = 0; i< 4; i++){
        nx = x + dx[i]
        ny = y + dy[i]

        if(nx < 0 || ny < 0 || nx >= N || ny >= N){
            continue
        }
        if(graph[nx][ny] === 1){
            count = DFS(nx, ny, count)
        }
    }

    return count
}

let count = 0
let result = []
for(let i = 0 ;i<N ; i++){
    for(let j = 0; j< N; j++){
        count = DFS(i, j, count)
        if (count){
            result.push(count)
            count = 0
    
        }
            }
}


console.log(result.length)
result.sort((a, b) => a-b)
console.log(result.join('\n'))