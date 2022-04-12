const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]

const arr = 'Hello World'

const Foo = (arr) => {
    let newarr = [...arr]
    console.log(newarr)
}
Foo(arr)