function solution(id_list, report, k) {
    var answer = [];
    let dict = {}
    let result = {}
    for (i of id_list) {
        dict[i] = []
        result[i] = []
    }

    for (r of report) {
        let [x, y] = r.split(' ')
        if (!dict[y].includes(x)) {
            dict[y].push(x)
        }
    }
    let stop = []
    for (i of id_list) {
        if (dict[i].length >= k) {
            stop.push(dict[i])
        }
    }
    for (s of stop) {
        for (a of s) {


            result[a].push(1)

        }
    }
    result2 = []
    for (i of id_list) {
        result2.push(result[i].length)
    }
    return result2;

}