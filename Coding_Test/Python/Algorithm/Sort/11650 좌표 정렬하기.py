import sys

N = int(sys.stdin.readline())
arr = []
for i in range(N):
    x, y = map(int, sys.stdin.readline().split())
    arr.append((x, y))

arr.sort(key= lambda x: (x[0], x[1]))

for x, y in arr:
    print(x, y)