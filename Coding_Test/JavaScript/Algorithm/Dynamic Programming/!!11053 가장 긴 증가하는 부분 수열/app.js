const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
let graph = []
let max = 0
let count = 0
let arr = input[1]
for(a of arr){

    if (a>max){
        count += 1
        max = a
    }
    graph.push(a)
}
console.log(count)