function solution(n, lost, reserve) {

    let count = n - lost.length;
    let tmp_lost = []
    
    lost = lost.sort()
    reserve = reserve.sort()
    
    for (l of lost){
        if(reserve.includes(l)){
            reserve = reserve.filter(v => v !== l)
            count++;
        } else{
            tmp_lost.push(l)
        }
    }
    
    lost = tmp_lost;
    
    for (l of lost){
        if(reserve.includes(l - 1)){
            reserve = reserve.filter(v => v !== l - 1);
            count++;
        }
        else if (reserve.includes(l + 1)){
            reserve = reserve.filter(v => v !== l + 1);
            count++;
        }
    }
    return count
    
}