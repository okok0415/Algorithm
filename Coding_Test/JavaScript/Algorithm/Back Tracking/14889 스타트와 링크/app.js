const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
let graph = []
for(let i = 1; i< N+1; i++){
    graph.push(input[i].split(' ').map(Number))

}
let visited = new Array(N).fill(0)
let result = []
let min = 1000000
const dfs = (v) => {
    if(v === N/2){
        console.log(result)
        
        let first = []
        let fscore = 0
        let second = []
        let sscore = 0
        for(let i = 0; i<N/2;i++){
            first.push(result[i])
        }
        for(let i = N/2; i< N;i++){
            second.push(result[i])
        }
        
        for(let i = 0; i<first.length;i++){
            for(let j = 0; j<first.length;j++){
                if(i === j) continue
                fscore += graph[first[i]-1][first[j]-1]
            }
        }
        for(let i = 0; i<second.length;i++){
            for(let j = 0; j<second.length;j++){
                if(i === j) continue
                sscore += graph[second[i]-1][second[j]-1]
            }
        }
        
        Math.min()
    }

    for(let i = 0;i<N;i++){
        if(visited[i] !== 0) continue;
        visited[i] = 1
        result.push(i+1)
        dfs(v+1)
        result.pop()
        visited[i] = 0
    }
}

dfs(0)

console.log(min)
