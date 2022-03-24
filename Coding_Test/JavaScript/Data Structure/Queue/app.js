const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input.txt'
const fileEnter = process.platform === 'linux' ? '\n' : '\r\n'
const input = fs.readFileSync(filePath).toString().split(fileEnter)

class Node {
    constructor (item) {
        this.item = item
        this.next = null
    }
}

class Queue {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0;
    }

    push(item) {
        const node = new Node(item)
        if(!this.head){
            this.head = node
            this.head.next = this.tail
        } else{
            this.tail.next = node
        }

        this.tail = node
        this.size += 1
    }

    ssize(){
        return this.size;
    }

    pop(){
        if(this.size > 2){
            const item = this.head.item
            const newHead = this.head.next
            this.head = newHead;
            this.size -= 1
            return item;
        } else if (this.size === 2){
            const item = this.head.item
            const newHead = this.head.next
            this.head = newHead
            this.tail = newHead
            this.size -= 1
            return item;
        } else if(this.size === 1){
            const item = this.head.item
            this.head = null
            this.tail = null;
            this.size -= 1;
            return item
        }
        else{
            return -1
        }
    }

    empty(){
        return this.size ? 0 : 1;
    }
    front(){
        return this.head? this.head.item : -1
    }
    back() {
        return this.tail? this.tail.item : -1
    }

}

const N = +input[0]
let queue = new Queue()
for(let i=1;i<N+1;i++){
    let command = input[i].split(' ')
    if (command[0] === 'push'){
        queue.push(command[1])
    }
    else if(command[0] === 'pop'){
        console.log(queue.pop())
    }
    else if(command[0] === 'size'){
        console.log(queue.ssize())
    }
    else if(command[0] === 'empty'){
        console.log(queue.empty())
    }
    
    else if(command[0] === 'front'){
        console.log(queue.front())
    }
    
    else if(command[0] === 'back'){
        console.log(queue.back())
    }

}

