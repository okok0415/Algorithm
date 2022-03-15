import sys


N, K = map(int, sys.stdin.readline().split())

count = 0
while N != 1:
    if N % K == 0:
        N /= K
        count += 1
    else:
        count += N%K
        N -= N%K
        
print(count)