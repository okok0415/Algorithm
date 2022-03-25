const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

let [N, M] = input[0].split(' ').map(Number)

let output = []
let result = ''
const DFS = (count) => {
    if(count === M){
        result += `${output.join(' ')}\n`
        return;
    }
    for(let i = 1;i<N+1;i++){
        output.push(i)
        DFS(count + 1)
        output.pop(i)
    }
}

DFS(0)

console.log(result)