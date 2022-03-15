from collections import deque
import sys


N = int(sys.stdin.readline())
r, s = map(int, sys.stdin.readline().rsplit())
M = int(sys.stdin.readline())

graph = []
for _ in range(N+1):
    graph.append([])
for _ in range(M):
    a, b = map(int, sys.stdin.readline().rsplit())

    graph[a].append(b)
    graph[b].append(a)

for i in graph:
    i.sort()

visited = [0] *(N+1)
def bfs(r, s):
    queue = deque()
    queue.append(r)
    visited[r] += 1
    while queue:
        v = queue.popleft()
        for i in graph[v]:
            if i == s:
                return visited[v]
            if visited[i] == 0:
                visited[i] = visited[v] + 1
                queue.append(i)
            
    return -1

print(bfs(r, s))

