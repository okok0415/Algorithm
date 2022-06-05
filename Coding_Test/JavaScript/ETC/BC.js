function solution(start_date, end_date, login_dates) {
    let dict = {
        1: new Array(31).fill(0),
        2: new Array(28).fill(0),
        3: new Array(31).fill(0),
        4: new Array(30).fill(0),
        5: new Array(31).fill(0),
        6: new Array(30).fill(0),
        7: new Array(31).fill(0),
        8: new Array(31).fill(0),
        9: new Array(30).fill(0),
        10: new Array(31).fill(0),
        11: new Array(30).fill(0),
        12: new Array(31).fill(0),
        13: [0]
    }
    let week = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN']
    let [start, W] = start_date.split(' ')
    let weekIdx = week.indexOf(W)

    for (l of login_dates) {
        let [M, D] = l.split('/').map(Number)

        dict[M][parseInt(D) - 1] = 1
    }

    let [startM, startD] = start.split('/').map(Number)
    let [endM, endD] = end_date.split('/').map(Number)
    let count = 0
    let result = []

    for (startM, startD; startM < endM || startD < endD; startD++) {
        if (startD === dict[parseInt(startM)].length) {
            startD = 0
            startM += 1
            continue
        }
        if (weekIdx !== 5 && weekIdx !== 6) {
            if (dict[startM][startD - 1] === 1) {
                count += 1
            } else {
                if (count) {
                    result.push(count)
                    count = 0
                }
            }
        }


        if (weekIdx !== 6) {
            weekIdx += 1
        } else {
            weekIdx = 0
        }

    }

    return Math.max(...result)
}