import copy
from collections import deque


def solution(progresses, speeds):
    arr = []
    for i in range(len(progresses)):
        if (100 - progresses[i]) % speeds[i] == 0:
            arr.append(int((100 - progresses[i]) / speeds[i]))
        else:
            arr.append(int((100 - progresses[i]) / speeds[i]) + 1)

    copyarr = copy.deepcopy(arr)
    copyarr = deque(copyarr)
    count = 1
    max = 0
    result = []
    print(arr)
    while copyarr:
        m = copyarr.popleft()
        if m > max:
            result.append(count)
            max = m
            count = 1
        else:
            count += 1

    result.append(count)

    return result[1:]