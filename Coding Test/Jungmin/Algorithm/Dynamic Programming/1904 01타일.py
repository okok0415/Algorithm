import sys


N = int(sys.stdin.readline())

d = [0] * (1000001)

d[1] = 1
d[2] = 2
d[3] = 3

for i in range(4, N+1):
    d[i] = (d[i-2]*2 + d[i-3])%15746

print(d[N])