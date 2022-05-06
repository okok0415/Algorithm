function solution(enroll, referral, seller, amount) {
    let graph = { center: [] }
    let graphlist = ['center']
    let graphcash = { center: 0 }
    for (let i = 0; i < enroll.length; i++) {
        if (!graphlist.includes(enroll[i])) {
            graphlist.push(enroll[i])
            graphcash[enroll[i]] = 0
            graph[enroll[i]] = []
        }

        if (referral[i] !== '-') {
            graph[enroll[i]].push(referral[i])
        } else {
            graph[enroll[i]].push('center')
        }

    }

    const DFS = (seller, amount) => {
        if (seller === 'center' || parseInt(amount * 0.1) === 0) {
            graphcash[seller] += amount

            return
        }
        let giveCash = parseInt(amount * 0.1)
        let getCash = amount - giveCash
        graphcash[seller] += getCash


        if (graph[seller].length !== 0) {
            DFS(graph[seller][0], giveCash)
        }
    }

    for (let i = 0; i < seller.length; i++) {
        DFS(seller[i], amount[i] * 100)
    }



    let result = []
    for (g of graphlist) {
        if (g === 'center') {
            continue
        }

        result.push(graphcash[g])
    }

    return result
    return
}