const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]

<<<<<<< HEAD
const arr = 'Hello World'

const Foo = (arr) => {
    let newarr = [...arr]
    console.log(newarr)
}
Foo(arr)
=======
var foo = function () {
    console.log(arguments)
}

foo(1, 2)
>>>>>>> 3ed8453a2a02a4801e75f3735924d9b59151f57a
