function solution(orders, course) {
    let arr = []
    let alpha = []
    for(o of orders){
        let dict = {}
        let a = o.split('')
        for(item of a){
            if(!alpha.includes(item)){
                alpha.push(item)
            }
            
            dict[item] = 1
        }
        arr.push(dict)
    }
    alpha.sort()
    let last = []
    let result = []
    let visited = new Array(alpha.length).fill(0)
    const BFS = (count) => {
        if (result.length === count){
            last.push(result)
            return 
        }
        
        for( let i = 0;i<alpha.length;i++){
            if (visited[i]) continue
            visited[i] = 1
            result.push(alpha[i])
            BFS(count)
            result.pop()
            visited[i] = 0
        }
        
        
    }
    BFS(2)
    console.log(last)
    
    console.log(arr)
    console.log(alpha)
}