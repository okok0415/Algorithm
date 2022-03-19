const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const T = +input[0]
let a = 1;


for(let i = 0; i< T; i++){
    let [M, N, K] = input[a].split(' ').map(Number)
    let graph = []
    for(let j = 0;j< N ; j++){
        graph.push(new Array(M).fill(0))
    }
    

    
    let max = a+K+1
    for(a+=1;a<max;a++){
        let [y, x] = input[a].split(' ').map(Number)
        graph[x][y] = 1
    }
    
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]

    const DFS = (x, y, count) => {
        if(graph[x][y] === 0 ){
            return count
        }

        count += 1
        graph[x][y] = 0

        for(let j=0;j<4;j++){
            nx = x + dx[j]
            ny = y + dy[j]

            if(nx < 0 || ny < 0 || nx >= N || ny >= M || graph[nx][ny] === 0){
                continue
            }
            if(graph[nx][ny] === 1){
                count = DFS(nx, ny, count)   
            }
        }    

        return count
    }
    let count = 0
    let final = []
    for(let j = 0; j<N; j++){
        for(let k = 0; k<M ;k++){
            count = DFS(j,k,count)
            if(count ){
                final.push(count)
                count = 0
            }
        }
    }
    console.log(final.length)
}
