const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
let result = 0
let graph = []
for(let i = 0 ; i< N;i++){
    graph.push(new Array(N).fill(0))
}

const Queen =(i, j) => {
    dx = [1, -1, -1, 1, 1, 0, -1, 0]
    dy = [1, 1, -1 ,-1, 0, 1, 0, -1]
    let result = []
    for(let k = 0 ; k < 8; k++){
        nx = i + dx[k]
        ny = j + dy[k]
        while(nx >= 0 && ny >= 0 && nx < N && ny < N &&graph[nx][ny] === 0){
            graph[nx][ny] = 1
            result.push([nx, ny])
            nx += dx[k]
            ny += dy[k]
            
        }
    }

    return result

}

const deQueen = (i, j) => {
    dx = [1, -1, -1, 1]
    dy = [1, 1, -1 ,-1]
    for(let k = 0 ; k < 4; k++){
        nx = i + dx[k]
        ny = j + dy[k]
        while(nx >= 0 && ny >= 0 && nx < N && ny < N &&graph[nx][ny] === 0){
            graph[nx][ny] = 0
            nx += dx[k]
            ny += dy[k]
        }
    }
}

const DFS = (count) => {
    if(count === N ){
        result += 1
        return
    }

    for(let i = 0;i<N;i++){
        for(let j = 0;j<N;j++){
            if(graph[i][j] !== 0) continue
            graph[i][j] = 1
            let result = Queen(i, j)
            DFS(count + 1)      
            graph[i][j] = 0
            for(r of result){
                graph[r[0]][r[1]] = 0
            }
            
        }
    }
}

DFS(0)

console.log(result)