function solution(sizes) {
    for (s of sizes) {
        s.sort((a, b) => b - a)
    }
    let result = 0
    sizes.sort((a, b) => b[0] - a[0])
    result += sizes[0][0]
    sizes.sort((a, b) => b[1] - a[1])
    result *= sizes[0][1]
    return result
}