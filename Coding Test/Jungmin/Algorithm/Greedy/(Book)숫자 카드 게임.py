import sys


N, M = map(int, sys.stdin.readline().split())
result = []
for i in range(N):
    result.append(min(list(map(int, sys.stdin.readline().split()))))

print(max(result))