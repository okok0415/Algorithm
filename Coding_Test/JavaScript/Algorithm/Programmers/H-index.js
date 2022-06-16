function solution(citations) {
    citations.sort((a, b) => a - b)
    let answer = 0
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] > citations.length - i - 1) {
            answer += 1
        }
    }
    return answer
}