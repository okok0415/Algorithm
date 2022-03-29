function solution(lottos, win_nums) {
    let zero = 0
    for (l of lottos) {
        if (l === 0) {
            zero += 1
            continue
        }

        if (win_nums.includes(l)) {
            win_nums.splice(win_nums.indexOf(l), 1)
        }

    }

    let result = []
    let first = win_nums.length - zero
    let second = win_nums.length

    if (first < 6) {
        result.push(first + 1)
    } else {
        result.push(first)
    }
    if (second < 6) {
        result.push(second + 1)
    } else {
        result.push(second)
    }
    return result
}