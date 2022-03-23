const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
const graph = []
const [a, b, c, d] = input[1].split(' ').map(Number)
for(let i =0 ;i<N;i++){
    graph.push(new Array(N).fill(0))
}

dx = [-2, -2, 0, 0, 2, 2]
dy = [-1, 1, -2, 2, -1, 1]

const BFS = (x, y) => {
    let queue = [[Number(x), Number(y)]]
    graph[x][y] = 1

    while(queue.length){
        let [x, y] = queue.shift()
        for(let i = 0; i< 6; i++){
            nx = x + dx[i]
            ny = y + dy[i]

            if(nx < 0 || ny < 0 || nx >= N || ny >= N || graph[nx][ny] !== 0){
                continue
            }
            if(graph[nx][ny] === 0){
                graph[nx][ny] += graph[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }
    
}

BFS(a, b)
console.log(graph[c][d] -1)