from collections import deque
import sys

N, M = map(int, sys.stdin.readline().split())
num = list(map(int, sys.stdin.readline().split()))
q = deque()
copyq1 = deque()
copyq2 = deque()
for i in range(N):
    copyq1.appendleft(i+1)
    copyq2.appendleft(i+1)
minimum = 0

for i in num:
    count = 0
    while True:
        pop = copyq1.pop()
        if pop == i:
            m1 = count
            break
        else:
            copyq1.appendleft(pop)
            count += 1
    
    count = 1
    while True:
        pop = copyq2.popleft()
        if pop == i:
            m2 = count
            break
        else:
            copyq2.append(pop)
            count += 1
    
    if m1 < m2:
        minimum += m1
        copyq2 =  copyq1.copy()
    else:
        minimum += m2
        copyq1 = copyq2.copy()
print(minimum)