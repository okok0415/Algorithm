function solution(salaries, days) {
    let result = 0
    for (s of salaries) {
        let [delay, money] = s
        if (days % delay === 0) {
            result += money * (days / delay)
        } else {
            result += money * (parseInt(days / delay) + 1)
        }
    }

    return result

}