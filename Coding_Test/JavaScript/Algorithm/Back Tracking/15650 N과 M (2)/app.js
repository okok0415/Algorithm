
const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

let [N, M] = input[0].split(' ').map(Number)
let visited = new Array(N+1).fill(0)
let output = []
const DFS = (count) => {
    if( count === M ){
        console.log(output.join(' '))
        return 
    }

    for(let i = 1; i<N+1; i++){
        if(visited[i]) continue
        if(output.length === 0){
            visited[i] = true
            output.push(i)
            DFS(count + 1)
            output.pop()
            visited[i] = false
        }
        else if( output[output.length-1] < i){
            visited[i] = true
            output.push(i)
            DFS(count + 1)
            output.pop()
            visited[i] = false
        }
        

    }
}

DFS(0)

