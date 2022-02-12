import sys


N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))

d = [0] * (N+1)
sys.setrecursionlimit(10**6)
#Top Down
def ant(x):
    if x == 0:
        return arr[x]
    if x == 1:
        return max(arr[x-1], arr[x])
    
    if d[x] != 0:
        return d[x]

    d[x] = max(ant(x-1), ant(x-2) + arr[x])
    return d[x]

print(ant(N-1))

#Bottom up
d = [0] * (N+1)

d[0] = arr[0]
d[1] = max(arr[0], arr[1])
for i in range(2, N):
    d[i] = max(d[i-1], d[i-2] + arr[i])

print(d[N-1])
