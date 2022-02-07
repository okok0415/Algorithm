from collections import deque
import sys


N, K = map(int, sys.stdin.readline().split())
graph = [0] * 1000000
count = 0
li = []
dx = [-1, 1, 0 ]

def bfs(start):
    queue = deque([start])
    graph[start] += 1
    while queue:
        x = queue.popleft()
        for i in range(3):
            if dx[i] == 0:
                nx = x*2
            else:
                nx = x + dx[i]

            if nx < 0 or nx>100000:
                continue
            if graph[nx] != 0 :
                continue
            if graph[nx] == 0:
                graph[nx] = graph[x] + 1
                queue.append(nx)

bfs(N)
print(graph[K]-1)
