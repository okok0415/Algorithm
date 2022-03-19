const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const input = fs.readFileSync(filePath).toString().split("\n")
T = +input[0]
let result = new Array(41).fill([0, 0])

const fibonacci = (N) => {
    if (N == 0){
        result[N] = [1,0]
        return result[N]
    }
    if (N == 1){
        result[N] =  [0, 1]
        return result[N]
    }
    
    if(result[N].toString() !== [0, 0].toString()){
        return result[N]
    }

    a = fibonacci(N-1)
    b = fibonacci(N-2)
    result[N] =  [a[0]+b[0], a[1]+b[1]]

    return result[N]
}
for(let i = 1;i<T+1;i++){
    N = +input[i]

    console.log(fibonacci(N).join(' '))

}
