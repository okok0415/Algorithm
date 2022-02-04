import sys


N = int(sys.stdin.readline())
arr = list(map(int, sys.stdin.readline().split()))
arr.sort()
result = 0
for i in range(N, -1, -1):
    result += arr[-i]*i


print(result)