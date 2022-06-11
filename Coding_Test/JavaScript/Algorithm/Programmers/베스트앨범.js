function solution(genres, plays) {
    let dict = {}
    let dictnum = {}
    let dictlist = []

    for (let i = 0; i < genres.length; i++) {
        if (!dict[genres[i]]) {
            dictlist.push(genres[i])
            dict[genres[i]] = [plays[i]]
        } else {
            dict[genres[i]].push(plays[i])
        }
    }
    let value = []
    let result = []
    for (d of dictlist) {
        let max = dict[d].indexOf(Math.max(...dict[d]))
        result.push(max)
        dict[d][max] = 0
        let max2 = dict[d].indexOf(Math.max(...dict[d]))
        result.push(max2)
    }

    console.log(dict)
    return result
}