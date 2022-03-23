function isPrime (n) {
    if(n == 1 || n == 0){
        return false
    }
    if(n == 2 || n == 3){
        return true
    }

    for(let i = 2; i<= Math.sqrt(n); i++){
        if( n%i === 2){
            return false
        }
    }
    return true
}