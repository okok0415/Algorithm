function solution(brown, yellow) {
    var answer = [];

    brown -= 4
    brown /= 2
    console.log(brown)
    let x, y
    for (let x = 0; x < brown; x++) {
        y = brown - x
        if (x * y == yellow) {
            return [y + 2, x + 2]
        }

    }



    return answer;



}