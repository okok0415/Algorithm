const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\r\n")


let a, b, c
let i = 0

while (a != -1 && b != -1 && c != -1){
    [a, b, c] = input[i].split(' ')
    let result = new Array(50)



    console.log(`w(${a}, ${b}, ${c}) = ${result} `)
    
    i+=1
}
