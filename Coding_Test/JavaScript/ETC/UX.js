function solution(scores) {
    let first = 0
    let second = 0
    let arr = []
    for (let i = 0; i < scores.length; i++) {
        first += scores[i][0]
        second += scores[i][1]
        arr.push([i + 1, scores[i][0] + scores[i][1]])
    }

    arr.sort((a, b) => {
        if (a[1] === b[1]) {
            if (first === second) {
                if (a[0] > b[0]) {
                    return 1
                }
                else {
                    return -1
                }
            } else if (first > second) {
                if (scores[a[0] - 1][1] > scores[b[0] - 1][1]) {
                    return -1
                } else if (scores[a[0] - 1][1] > scores[b[0] - 1][1]) {
                    return 1
                } else {
                    if (a[0] > b[0]) {
                        return 1
                    } else {
                        return -1
                    }
                }
            } else {
                if (scores[a[0] - 1][0] > scores[b[0] - 1][0]) {
                    return -1
                } else if (scores[a[0] - 1][0] < scores[b[0] - 1][0]) {
                    return 1
                } else {
                    if (a[0] > b[0]) {
                        return 1
                    } else {
                        return -1
                    }
                }
            }
        }
        else {
            return b[1] - a[1]
        }
    })


    let result = new Array(scores.length).fill(0)
    for (let i = 0; i < arr.length; i++) {
        result[arr[i][0] - 1] = i + 1
    }

    return result
}