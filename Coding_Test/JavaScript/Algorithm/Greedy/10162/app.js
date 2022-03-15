const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'

const stdin = fs.readFileSync(filePath).toString()

let Time = parseInt(stdin)

let five = 0
let one = 0
let ten = 0
let minus = true
while (Time !== 0){
    if (Time >= 300){
        value = parseInt(Time / 300)
        Time -= value * 300
        five += value
    }
    else if (Time >= 60) {
        value = parseInt(Time / 60)
        Time -= value * 60
        one += value
    }
    else if (Time >= 10) {
        value = parseInt(Time / 10)
        Time -= value * 10
        ten += value
    }
    else {
        minus = false
        break
    }

}

if (minus){
    console.log(five, one, ten)
} else{
    console.log(-1)
}
