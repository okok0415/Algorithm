from collections import deque
import sys


M, N = map(int, sys.stdin.readline().split())
graph = []
for i in range(N):
    graph.append(list(map(int, input().split())))

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]
queue = deque()
for i in range(N):
    for j in range(M):
        if graph[i][j] == 1:
            queue.append((i,j))
        

def bfs():
    #어차피 queue에 넣으면 순서대로 한다. 따로 for문을 만들 필요가 없음 
    while queue:
        x, y = queue.popleft()
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]

            if nx < 0 or ny < 0 or nx >=N or ny >= M or graph[nx][ny] == -1:
                continue
            elif graph[nx][ny] == 0:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
                
        

bfs()
result = 0
for i in graph:
    for j in i:
        if j == 0:
            print(-1)
            exit(0)
    result = max(result, max(i))

print(result-1)