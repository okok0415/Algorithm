function solution(progresses, speeds) {
    var answer = [];
    let progress = []
    for (p of progresses) {
        p = 100 - p
        progress.push(p)
    }

    while (progress.length) {
        let days = 0
        if (progress[0] % speeds[0] == 0) {
            days = parseInt(progress[0] / speeds[0])
        } else {
            days = parseInt(progress[0] / speeds[0] + 1)
        }

        for (let i = 0; i < progress.length; i++) {
            progress[i] -= days * speeds[i]
        }
        let count = 0
        let i = 0
        while (true) {

            if (progress[i] <= 0) {
                count += 1
                progress.shift()
                speeds.shift()
            } else {
                break
            }
        }
        answer.push(count)


    }
    return answer;

}