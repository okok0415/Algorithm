import sys


T = int(sys.stdin.readline())
arr = []
for _ in range(T):
    arr.append(int(sys.stdin.readline()))


for i in arr:
    x = [0] * 41
    y = [0] * 41

    x[0] = 1
    y[0] = 0

    x[1] = 0
    y[1] = 1


    for j in range(2, i+1):
        x[j] = x[j-1] + x[j-2]
        y[j] = y[j-1] + y[j-2]


    print(x[i], y[i])