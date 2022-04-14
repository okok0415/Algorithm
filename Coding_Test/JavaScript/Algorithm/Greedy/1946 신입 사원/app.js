const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const T = +input[0]
let change = 1

for(let i = 1; i< T+1; i++ ){
    let arr = []
    const N = +input[change]
    for(let j = 1 ; j < N+1; j++){
        let [f, c] = input[change + j].split(' ').map(Number)
        arr.push([f,c])
    }

    let result = 0
    arr.sort((a, b) => b[0] - a[0])
    console.log(arr)
    for(let j = 0 ; j < arr.length; j++){
        let r = 0
        for(k = 0;k<arr.length;k++){
            if(j === k){
                continue
            }

            if(arr[j][0] > arr[k][0] && arr[j][1] > arr[k][1]){
                r += 1
            }
        }
        if(r === 0){
            result += 1
        }

    }

    
    
    change += N+1
    console.log(result)
}

