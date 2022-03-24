const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

let graph = {
    0 : 0,
    1 : 0,
    2 : 0,
    3 : 0,
    4 : 0,
    5 : 0,
    6 : 0,
    7 : 0,
    8 : 0,
    9 : 0,
}


const N = +input[0]

for(let i = 1;i< N +1 ; i++){
    if( i === 1){
        for (let j = 1;j< 10;j++){
            graph[j] += 1
        }
        continue
    }

    let graphCopy = {
        0 : 0,
        1 : 0,
        2 : 0,
        3 : 0,
        4 : 0,
        5 : 0,
        6 : 0,
        7 : 0,
        8 : 0,
        9 : 0,
    }

    for(let j = 0; j < 10; j++){
    
        if(j === 0){
            graphCopy[j+1] += graph[j] 
            graphCopy[j+1] %= 1000000000
        }
        else if(j === 9){
            graphCopy[j-1] += graph[j] 
            graphCopy[j-1] %= 1000000000
        }
        else {
            graphCopy[j-1] += graph[j] 
            graphCopy[j-1] %= 1000000000
            graphCopy[j+1] += graph[j]
            graphCopy[j+1] %= 1000000000
        }
    }

    graph = graphCopy
}
let result = 0
for(let i = 0;i<10;i++){
    result += graph[i]
}
console.log(result%1000000000)