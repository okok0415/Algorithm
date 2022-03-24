const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const n = +input[0]
let arr = input[1].split(' ').map(Number)
let result = []

let value = 0
for(a of arr){
    if(value < 0){
        result.push(a)
        value = a
    }else{
        result.push(a + value)
        value += a
    }


}
console.log(Math.max(...result))

