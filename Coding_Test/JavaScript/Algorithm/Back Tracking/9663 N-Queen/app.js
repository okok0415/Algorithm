const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
let graph = []
for(let i = 0; i<N; i++){
    graph.push(new Array(N).fill(0))
}
let output = []
console.log(graph)
const check = (i, j) => {
    if(output.length === 0){
        return true
    }

    dx = [-1, -1, 1, 1]
    dy = [-1, 1, -1, 1]

    for(o of output){
        let x = o[0]
        let y = o[1]

        if (i === x || j === y){
            return false
        }

        for(let a = 0; a<4;a++){
            nx = i + dx[a]
            ny = i + dy[a]

            while (nx < 0 || ny)
        }

    }




}

const DFS = (count) => {
    if (count === N){
        result += 1
        return 
    }


    for(let i = 0;i<N;i++){
        for(let j=0;j<N;j++){
            if(graph[i][j] !== 0) continue
            if(check(i, j)){
                graph[i][j] = 1
                output.push([i,j])
                DFS(count + 1)
                output.pop()
                graph[i][j] = 0
            }

        }
    }
}

