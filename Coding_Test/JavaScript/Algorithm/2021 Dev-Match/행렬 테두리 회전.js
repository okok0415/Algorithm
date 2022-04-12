function solution(rows, columns, queries) {
    let graph = []
    let result = []
    for (let i = 0; i < rows; i++) {
        graph.push(new Array(columns).fill(columns * (i) + 1).map((a, b) => (a + b)))
    }

    const range = (x1, y1, x2, y2) => {
        let min = 1000000001


        let tmp1, tmp2
        for (let i = y1; i < y2; i++) {

            if (i === y1) {
                tmp2 = graph[x1][i]
            }
            if (tmp2 < min) {
                min = tmp2
            }
            tmp1 = graph[x1][i + 1]
            graph[x1][i + 1] = tmp2
            tmp2 = tmp1

        }

        for (let i = x1; i < x2; i++) {
            if (tmp2 < min) {
                min = tmp2
            }
            tmp1 = graph[i + 1][y2]
            graph[i + 1][y2] = tmp2
            tmp2 = tmp1
        }

        for (let i = y2; i > y1; i--) {
            if (tmp2 < min) {
                min = tmp2
            }
            tmp1 = graph[x2][i - 1]
            graph[x2][i - 1] = tmp2
            tmp2 = tmp1
        }

        for (let i = x2; i > x1; i--) {
            if (tmp2 < min) {
                min = tmp2
            }
            tmp1 = graph[i - 1][y1]
            graph[i - 1][y1] = tmp2
            tmp2 = tmp1
        }
        result.push(min)
    }
    for (q of queries) {
        let [a, b, c, d] = q
        range(a - 1, b - 1, c - 1, d - 1)

    }
    console.log(graph)

    return result;
}