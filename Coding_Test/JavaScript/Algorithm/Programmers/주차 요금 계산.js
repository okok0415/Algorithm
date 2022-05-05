function solution(fees, records) {
    let dict = {}
    let timerecords = {}
    let car_list = []
    for (r of records) {
        let [time, num, out] = r.split(' ')
        console.log(time, num, out)
        let [hour, min] = time.split(':')
        time = Number(hour) * 60 + Number(min)

        if (out === 'IN') {
            if (!car_list.includes(num)) {
                car_list.push(num)
            }
            dict[num] = [time]
        }
        if (out === 'OUT') {
            let time2 = dict[num].pop()
            if (!timerecords[num]) {
                timerecords[num] = (time - time2)
            } else {
                timerecords[num] += (time - time2)
            }
        }



    }
    let max = 24 * 60 - 1
    for (c of car_list) {
        if (dict[c].length !== 0) {
            if (!timerecords[c]) {
                timerecords[c] = max - dict[c][0]
            } else {
                timerecords[c] += max - dict[c][0]
            }

        }
    }
    car_list.sort((a, b) => Number(a) - Number(b))
    console.log(car_list)
    console.log(timerecords)
    let answer = []
    for (c of car_list) {
        let ltime = fees[0]
        let lcash = fees[1]
        let ptime = fees[2]
        let pcash = fees[3]
        let cash = 0
        console.log(ltime, lcash, ptime, pcash)
        console.log(parseInt((timerecords[c] - ltime) / ptime) * pcash + lcash)
        if (timerecords[c] >= ltime) {
            if (((timerecords[c] - ltime)) % ptime === 0) {
                console.log(parseInt((timerecords[c] - ltime) / ptime) * pcash + lcash)
                answer.push(lcash + ((timerecords[c] - ltime) / ptime * pcash))
            }
            else {
                console.log(parseInt((timerecords[c] - ltime) / ptime + 1) * pcash + lcash)
                answer.push(lcash + (parseInt((timerecords[c] - ltime) / ptime + 1) * pcash))
            }
        } else {
            answer.push(lcash)
        }
    }

    return answer;
}