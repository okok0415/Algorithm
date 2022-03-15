import sys


x = int(sys.stdin.readline())


#Bottom Up
d = [0] * 30001

for i in range(2, x+1):
    d[i] = d[i-1] + 1

    if i%2 == 0:
        d[i] = min(d[i], d[i//2]  + 1)
    if i%3 == 0:
        d[i] = min(d[i], d[i//3] + 1)
    if i%5 == 0:
        d[i] = min(d[i], d[i//5] + 1)

print(d[x])

#Top Down
sys.setrecursionlimit(10**6)
d = [0]* 30001
def DP(x):
    if x == 1:
        return 0
    
    if d[x] != 0:
        return d[x]
    
    d[x] = DP(x-1) + 1

    if x%2 == 0 :
        d[x] = min(d[x], DP(x//2)+1)
    if x%3 == 0:
        d[x] = min(d[x], DP(x//3)+1)
    if x%5 == 0:
        d[x] = min(d[x], DP(x//5)+1)
    return d[x]

print(DP(x))