from collections import deque
import sys

N, K = map(int, sys.stdin.readline().split())
q = deque()
r = deque()
for i in range(N):
    q.appendleft(i+1)

count = 1
while q:
    if count == K:
        r.append(q.pop())
        count = 1
    else:
        q.appendleft(q.pop())
        count += 1

print("<", end='')
for i in range(len(r)):
    if len(r) != 1:
        print(r.popleft(), end=", ")
    else:
        print(r.popleft(), end='')

print(">")