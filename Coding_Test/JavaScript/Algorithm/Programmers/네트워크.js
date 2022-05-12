function solution(n, computers) {
    var answer = [];
    let graph = [[]]
    for (let i = 0; i < n; i++) {
        graph.push([])
        computers[i][i] = 0
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === j) {
                continue
            }
            if (computers[i][j] == 1) {
                graph[i + 1].push(j + 1)

            }
        }
        graph[i].sort((a, b) => a - b)
    }

    console.log(graph)

    let flag = new Array(n + 1).fill(0)
    let count = 0
    const DFS = (v, count) => {
        if (flag[v] !== 0) {
            return count
        }

        flag[v] = 1
        count += 1

        for (g of graph[v]) {
            if (flag[g] === 0) {
                count = DFS(g, count)

            }
        }
        return count

    }
    let value = 0
    for (let i = 1; i < n + 1; i++) {
        value = DFS(i, count)
        if (value) {
            answer.push(value)
        }
    }



    return answer.length;
}