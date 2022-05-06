const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const T = +input[0]
let count = 0
for(let i = 1; i< T+1; i++){
    count += 1
    const N = +input[count]    
    let arr = []
    for(let j = 0;j<N;j++){
        count += 1
        arr.push(input[count].split(' ').map(Number))
    }
    console.log(arr)

}