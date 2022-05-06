const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)


let arr = input[0].split('').map(Number)
let result = 0
let T = false
for(a of arr){
    if (a === 0){
        T = true
    }
    result += a
}
if(result%3 !== 0  || T === false){
    console.log(-1)
}else{
    arr.sort((a, b) => b - a)
    console.log(arr.join(''))
}