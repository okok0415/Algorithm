const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const stdin = fs.readFileSync(filePath).toString().split('')

if (stdin.includes('0')){
    let sum = 0
    stdin.forEach(v => {
        sum += parseInt(v)
    })
    if (sum % 3 == 0){
        
        let arr = stdin.sort((a, b) => b - a)
        arr.forEach(a => {
            process.stdout.write(String(a))
        })
        process.stdout.write('\n')
        
    }else{
        console.log('-1')
    }

}else{
    console.log('-1')
}

