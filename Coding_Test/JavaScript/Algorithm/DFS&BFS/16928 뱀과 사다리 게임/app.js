const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const graph = new Array(101).fill(0)

const [N, M] = input[0].split(' ').map(Number)

let Ncheck = []
let Nresult = []

for( let i = 1;i< N + M +1;i++){
    let [a, b] = input[i].split(' ')
    Ncheck.push(Number(a))
    Nresult.push(Number(b))
}

dx = [1, 2, 3, 4, 5, 6]

const BFS = (v) => {
    let queue = [v]
    graph[v] = 1
    while(queue.length){
        let v = queue.shift()
        for(let i = 0; i<6;i++){
            nx = v + dx[i]

            if(Ncheck.includes(nx)){
                if(graph[Nresult[Ncheck.indexOf(nx)]] === 0){
                    graph[Nresult[Ncheck.indexOf(nx)]] += graph[v] + 1
                    queue.push(Nresult[Ncheck.indexOf(nx)])
                }
            }
    
            if(nx > 100){
                continue
            }

            if(graph[nx] === 0){
                graph[nx] += graph[v] + 1
                queue.push(nx)
            }

        }
    }
    return graph[100]

}


console.log(BFS(1) -1)
console.log(graph)