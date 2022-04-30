function solution(n, k) {
    var answer = -1;


    let arr = n.toString(k).split('0')

    const isPrime = (n) => {
        if (n === 1) {
            return false
        }
        if (n === 2) {
            return true
        }

        for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
            if (n % i === 0) {
                return false
            }
        }

        return true
    }
    let result = 0
    for (a of arr) {
        if (a.length === 0) {
            continue
        }
        if (isPrime(Number(a))) {
            result += 1
        }
    }



    return result;
}