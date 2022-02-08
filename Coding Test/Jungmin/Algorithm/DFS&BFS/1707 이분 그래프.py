from collections import deque
import sys
import time

start_time = time.time()

def bfs(graph, start, visited):
    t = 1
    queue = deque()
    queue.append(start)
    visited[start][0] = 1
    visited[start][1] = t
    while queue:
        v = queue.popleft()
        
        if visited[v][1] == 1:
            t = 2
        elif visited[v][1] == 2:
            t = 1

        for i in graph[v]:
            if visited[i][0] == 1 and visited[i][1] != t:
                return 'NO'
            if visited[i][0] == 1 and visited[i][1] == t:
                continue
            if visited[i][0] == 0:
                queue.append(i)
                visited[i][0] = 1 
                visited[i][1] = t


    return 'YES'


K = int(sys.stdin.readline())
for i in range(K):
    ans = []
    V, E = map(int, sys.stdin.readline().split())
    graph = []
    for j in range(V):
        graph.append([])
    
    for j in range(E):
        a, b = map(int, sys.stdin.readline().split())
        graph[a-1].append(b-1)
        graph[b-1].append(a-1)
    
    for j in graph:
        j.sort()

    visited = []
    for j in range(V):
        visited.append([0,0])
    
    for j in range(V):
        if visited[j][0] == 0:
            ans.append(bfs(graph, j, visited))
            

    if 'NO' in ans:
        print('NO')
    else:
        print('YES')

end_time = time.time()

print("Time : ", end_time - start_time)