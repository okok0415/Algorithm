from collections import deque
import sys


N, M, V = map(int, sys.stdin.readline().split())
    
graph = []
for i in range(N+1):
    graph.append([])

for i in range(M):
    a, b = map(int, sys.stdin.readline().split())
    graph[a].append(b)
    graph[b].append(a)

for i in graph:
    i.sort()
visited = [False]*(N + 1)
DFS = []
def dfs(graph, v, visited):
    visited[v] = True
    DFS.append(v)
    for i in graph[v]:
        if not visited[i]:
            dfs(graph, i, visited)

dfs(graph, V, visited)


visited = [False] * (N+1)
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

bfs(graph, V, visited)

for i in DFS:
    print(i, end= ' ')
print()
for i in BFS:
    print(i, end=' ')