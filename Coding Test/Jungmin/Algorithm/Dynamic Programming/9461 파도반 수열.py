import sys


T = int(sys.stdin.readline())

d = [0] * 101

d[0] = 1
d[1] = 1
d[2] = 1
d[3] = 1
d[4] = 2
d[5] = 2
d[6] = 3
d[7] = 4
d[8] = 5
d[9] = 7
d[10] = 9

for _ in range(T):

    K = int(sys.stdin.readline())

    for i in range(10, K+1):
        d[i] = d[i-1] + d[i-5]

    print(d[K])


