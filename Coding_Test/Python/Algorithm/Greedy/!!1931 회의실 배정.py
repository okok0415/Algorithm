import sys


N = int(sys.stdin.readline())
arr = []
for i in range(N):
    arr.append(tuple(map(int, sys.stdin.readline().split())))

arr.sort(key=lambda x: (x[1],x[0]))
count = 0
last = 0
for s, e in arr:
    if last <= s:
        count += 1
        last = e

print(count)