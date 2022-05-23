def solution(genres, plays):

    temp = [[genres[i], plays[i], i] for i in range(len(genres))]

    temp = sorted(temp, key=lambda x: (x[0], -x[1], x[2]))
    sum = {}
    dict = {}
    for tem in temp:
        if tem[0] not in dict:
            dict[tem[0]] = []
            sum[tem[0]] = 0
        sum[tem[0]] += tem[1]
        dict[tem[0]].append([tem[1], tem[2]])

    sum = sorted(sum, key=lambda x: -sum[x])
    result = []
    for s in sum:
        for i in range(len(dict[s])):
            if i >= 2:
                break
            result.append(dict[s][i][1])

    return result