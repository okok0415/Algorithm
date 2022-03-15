
from collections import deque
from re import L
import sys


M, N, H = map(int, sys.stdin.readline().split())
graph = []
second = []
queue = deque()
for h in range(H):
    for i in range(N):
        second.append(list(map(int, input().split())))
        
    graph.append(second)    
    second = []

for h in range(H):
    for i in range(N):
        for j in range(M):
            if graph[h][i][j] == 1:
                queue.append((h,i,j))

dx = [-1, 1, 0, 0, 0, 0]
dy = [0, 0, -1, 1, 0, 0]
dz = [0, 0, 0, 0, -1, 1]

def bfs():
    while queue:
        z, x, y = queue.popleft()
        for i in range(6):
            nx = x + dx[i]
            ny = y + dy[i]
            nz = z + dz[i]
            
            if 0 > nx or nx >= N or 0 > ny or ny >= M or 0 > nz or nz >= H :
                continue
            if graph[nz][nx][ny] == -1:
                continue
            if graph[nz][nx][ny] == 0:
                graph[nz][nx][ny] = graph[z][x][y] + 1
                queue.append((nz, nx, ny))
    


bfs()
result = 0
for h in range(H):
    for i in range(N):
        for j in range(M):
            if graph[h][i][j] == 0:
                print(-1)
                exit(0)
            elif graph[h][i][j] > result:
                result = graph[h][i][j]

print(result -1)