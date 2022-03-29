const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

const N = +input[0]
let arr = []
let avg = 0
let dict = {}


for(let i = 1 ; i< N+1;i++){
    
    arr.push(+input[i])
    avg += +input[i]
    if (!dict[+input[i]]){
        dict[+input[i]] = 1
    }else{
        dict[+input[i]] += 1
    }
}
arr.sort((a, b) => a - b)
let max = 0
for(a of arr){
    if (dict[a] > max){
        max = dict[a]
    }
}


//1

const average = Math.round(arr.reduce((acc, num, idx) => (acc += num), 0) / N)
console.log(average)


//2
console.log(arr[parseInt(arr.length/2)])

//3
let bean = []
for(a of arr){
    if(dict[a] === max){
        bean.push(a)
    }
}

if (bean.length >1){
    console.log(bean[1])
}else{
    console.log(bean[0])
}



//4
console.log(arr[arr.length-1] - arr[0])