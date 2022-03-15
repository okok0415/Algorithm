import sys

N = int(sys.stdin.readline())
i = list(map(int, sys.stdin.readline().split()))
j = list(map(int, sys.stdin.readline().split()))

for a in range(N-1):
    if j[a] < j[a+1]:
        j[a+1] = j[a]

result = 0
for a in range(N-1):
    result += i[a]*j[a]



print(result)