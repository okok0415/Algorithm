function solution(price, money, count) {
    let final = price * (1 + count) * count / 2
    if (final > money) {
        return final - money
    } else {
        return 0
    }



}