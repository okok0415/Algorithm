import sys


N, M, K = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

arr.sort()
print((arr[-1]*K+arr[-2])*int(M/(K+1))+ arr[-1]*(M%(K+1)))
