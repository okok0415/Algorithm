function solution(begin, target, words) {
    var answer = 0;
    if (!words.includes(target)) {
        return 0
    }
    words.unshift(begin)

    let graph = []
    for (let i = 0; i < words.length; i++) {
        graph.push([])
    }
    let flag = new Array(words.length).fill(0)
    const putGraph = (v) => {
        if (flag[v] !== 0) {
            return
        }


        let queue = [v]
        while (queue.length) {
            v = queue.shift()
            flag[v] = 1
            for (let i = 0; i < words.length; i++) {
                let same = 0
                for (let j = 0; j < words[i].length; j++) {
                    if (words[v][j] === words[i][j]) {
                        same += 1
                    }
                }
                if (same == words[v].length - 1) {
                    if (flag[i] === 0) {
                        graph[v].push(i)
                        graph[i].push(v)
                        queue.push(i)

                    }
                }
            }
        }

    }

    putGraph(0)

    let flag2 = new Array(words.length).fill(0)
    let historybook = []
    const BFS = (v) => {
        let queue = [v]
        flag2[v] = 1

        while (queue.length) {
            v = queue.shift()

            for (g of graph[v]) {
                if (flag2[g] === 0) {
                    flag2[g] = flag2[v] + 1
                    queue.push(g)
                }
            }


        }


    }

    BFS(0)
    answer = flag2[words.indexOf(target)] - 1
    return answer;
}