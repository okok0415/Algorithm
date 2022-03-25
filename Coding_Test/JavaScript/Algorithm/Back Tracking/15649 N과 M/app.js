const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

let [N, M] = input[0].split(' ').map(Number)
let visited = new Array(N+1).fill(false)
let output = []

const DFS = (count) => {
    if(count === M){
        console.log(output.join(' '))
        return;
    }
    for(let i = 1;i<N+1;i++){
        if(visited[i]) continue
        visited[i] = true
        output.push(i)
        DFS(count + 1)
        output.pop(i)
        visited[i] = false
    }
}

DFS(0)

