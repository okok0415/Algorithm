function solution(students, n, m, k) {
    let N = n
    let dong = {

    }
    let dongName = []
    let stud = {}
    let del = []


    for (let student of students) {
        let split = student.split(' ')
        if (!stud[split[0]]) {
            stud[split[0]] = 1
        } else {
            del.push(split[0])
        }


        if (!dong[split[2]]) {
            dongName.push(split[2])
            dong[split[2]] = [[split[0], split[1]]]
            //dict[split[2]] = [[`${split[0][0]}${split[0][1]}`], [split[1]]]
        } else {
            //if(!dict[split[2]][0].includes(`${split[0][0]}${split[0][1]}`)){
            //    dict[split[2]][0].push(`${split[0][0]}${split[0][1]}`)
            //}
            dong[split[2]].push([split[0], split[1]])
        }
    }

    for (d of del) {
        for (n of dongName) {
            for (let i = 0; i < dong[n].length; i++) {
                if (dong[n][i][0] === d) {
                    delete dong[n].splice(i, 1)
                }
            }

        }
    }


    let dict = {}

    for (n of dongName) {
        dict[n] = [[], []]
    }

    for (n of dongName) {
        for (d of dong[n]) {
            if (!dict[n][0].includes(`${d[0][0]}${d[0][1]}`)) {
                dict[n][0].push(`${d[0][0]}${d[0][1]}`)
            }

            if (!dict[n][1].includes(d[1])) {
                dict[n][1].push(d[1])
            }
        }
    }

    let result = 0
    for (n of dongName) {
        if (dong[n].length >= N && dict[n][0].length >= m && dict[n][1].length >= k) {
            result += 1
        }
    }

    return result
}