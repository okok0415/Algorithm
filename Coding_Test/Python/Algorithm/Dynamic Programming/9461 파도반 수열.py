import sys


T = int(sys.stdin.readline())

d = [1, 1, 1, 1, 2, 2, 3, 4, 5, 7, 9] + [0] * 101


for _ in range(T):

    K = int(sys.stdin.readline())

    for i in range(10, K + 1):
        d[i] = d[i - 1] + d[i - 5]

    print(d[K])
