from collections import deque
import sys

q = deque()
N = int(sys.stdin.readline())
for i in range(N):
    q.appendleft(i+1)

for i in range(N-1):
    q.pop()
    q.appendleft(q.pop())

print(q.pop())
    