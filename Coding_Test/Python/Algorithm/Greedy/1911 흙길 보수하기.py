import sys


N , L = map(int, sys.stdin.readline().split())
pool = [list(map(int, sys.stdin.readline().split())) for _ in range(N)]
pool.sort()


plank = pool[0][0]
count = 0
check = 0
for x, y in pool:

    x = max(check, x)
    dist = y - x
    
    if dist % L == 0:
        count += dist // L
    else:
        count += dist // L + 1
        check = y + (L - (dist % L))

print(count)