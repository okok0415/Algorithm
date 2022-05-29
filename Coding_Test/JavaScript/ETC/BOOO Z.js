function solution(grades, ledger) {
    let avg = 0
    let plus = 0
    let sum = 0
    for (l of ledger) {
        sum += l
        avg += sum

        if (l > 0) {
            plus += 1
        }
    }
    avg = parseInt(avg / ledger.length)
    let result = []
    if (avg >= grades[0][0] && plus >= grades[0][1]) {
        result.push('GOLD')

    } else if (avg >= grades[1][0] && plus >= grades[1][1]) {
        result.push('SILVER')
        if (avg < grades[0][0]) {
            result.push(grades[0][0] - avg)
        } else {
            result.push(0)
        }

        if (plus < grades[0][1]) {
            result.push(grades[0][1] - plus)
        } else {
            result.push(0)
        }
    } else if (avg >= grades[2][0] && plus >= grades[2][1]) {
        result.push('BRONZE')
        if (avg < grades[1][0]) {
            result.push(grades[1][0] - avg)
        } else {
            result.push(0)
        }

        if (plus < grades[1][1]) {
            result.push(grades[1][1] - plus)
        } else {
            result.push(0)
        }

    } else {
        result.push('NORMAL')
        if (avg < grades[2][0]) {
            result.push(grades[2][0] - avg)
        } else {
            result.push(0)
        }

        if (plus < grades[2][1]) {
            result.push(grades[2][1] - plus)
        } else {
            result.push(0)
        }
    }

    return result.join(' ')
}