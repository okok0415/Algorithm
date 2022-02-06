from collections import deque
import sys


N = int(sys.stdin.readline())
M = int(sys.stdin.readline())

graph = []

for i in range(N+1):
    graph.append([])

for i in range(M):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

for i in graph:
    i.sort()

visited = [False]* (N+1)
BFS = []
def bfs(graph, start, visited):
    queue = deque([start])
    visited[start] = True
    while queue:
        v = queue.popleft()
        BFS.append(v)
        for i in graph[v]:
            if not visited[i]:
                visited[i] = True
                queue.append(i)
    
bfs(graph, 1, visited)
print(len(BFS)-1)