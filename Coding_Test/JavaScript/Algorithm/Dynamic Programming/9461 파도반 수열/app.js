const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")


const T = +input[0]
let result = new Array(100).fill(0)
result[0] = 1
result[1] = 1
result[2] = 1
result[3] = 2
result[4] = 2


for(let i = 1;i<T+1;i++){
    N = +input[i]
    for(let j = 5; j< N+1;j++){
        result[j] = (result[j-1] + result[j-5])
    }

    console.log(result[N-1])
}

