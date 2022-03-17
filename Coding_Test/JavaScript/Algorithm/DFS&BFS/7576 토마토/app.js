const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")

const [M, N] = input[0].split(' ').map(Number)

let graph = []

for(let i = 0; i< N; i++){
    graph.push(input[i+1].split(' ').map(Number))
    if (graph[i][M] === 0){
        graph[i].pop()
    }
}

let xy = []
for(let i = 0;i<N; i++){
    if (graph[i].includes(1)){
        xy.push([i, graph[i].indexOf(1)])
    }
}


dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

const BFS = (xy) => {
    let queue = xy
    let idx = 0
    while(idx !== queue.length){
        let [x, y] = queue[idx]
        idx += 1
        for(let i = 0;i<4;i++){
            nx = x + dx[i]
            ny = y + dy[i]

            if (nx < 0 || ny < 0 || nx >= N || ny >= M){
                continue
            }
            if (graph[nx][ny] === 0){
                graph[nx][ny] = graph[x][y] + 1
                queue.push([nx, ny])
            }
        }
    }

    max = 0
    for(let i = 0; i< N; i++){
        if(graph[i].includes(0)){
            return -1
        } else{
            if (max < Math.max(...graph[i])){
                max = Math.max(...graph[i])
            }
        }

    }

    return max - 1
}

console.log(BFS(xy))