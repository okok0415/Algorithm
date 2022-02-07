from collections import deque
import copy
import sys


N, M = map(int, sys.stdin.readline().split())

graph = []
for i in range(N):
    graph.append(list(map(int, input())))

graphcopy = graph[:]

dx = [-1, 1, 0, 0]
dy = [0,0,-1,1]

def bfs (graphcopy):
    queue = deque()
    queue.append((0,0))
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or nx >= N or ny < 0 or ny >= M:
                continue
            if graphcopy[nx][ny] == 1:
                continue 
            if graphcopy[nx][ny] == 0:
                graphcopy[nx][ny] = graphcopy[x][y] + 1
                queue.append((nx, ny))
    



li = []
graphcopy = copy.deepcopy(graph)
bfs(graphcopy)
li.append(graphcopy[N-1][M-1])
for i in range(N):
    for j in range(M):
        if graph[i][j] == 1:
            graphcopy = copy.deepcopy(graph)
            graphcopy[i][j] = 0
            bfs(graphcopy)
            li.append(graphcopy[N-1][M-1])

if max(li) == 0:
    print(-1)
else:
    print(max(li)+1)