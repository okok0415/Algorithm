const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

let [N, M] = input[0].split(' ')
let graph = []

for(let i =0;i<N;i++){
    graph.push(input[i+1].split('').map(Number))
}

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]


const BFS = (x, y) => {
    let queue = [[x, y]]
    while(queue.length){

        [x, y] = queue.shift()
        
        for(let i = 0; i< 4; i++){
            nx = x + dx[i]
            ny = y + dy[i]

            if (nx < 0 || ny < 0 || nx >= N || ny >= M || graph[nx][ny] === 0){
                continue
            }
            if(graph[nx][ny] === 1){
                graph[nx][ny] = graph[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }
    return graph[N-1][M-1]
}

console.log(BFS(0,0))