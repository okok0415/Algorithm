import sys
from collections import deque

N, M = map(int, sys.stdin.readline().split())
graph = [list(map(int, sys.stdin.readline().rstrip())) for _ in range(N)]
visited = [[[0] * 2 for _ in range(M)] for _ in range(N)]

dx = [-1, 1, 0, 0]
dy = [0,0,-1,1]

def bfs():
    q = deque()
    q.append((0,0,0))
    visited[0][0][0] = 1

    while q:
        x, y, wall = q.popleft()
        if x == N -1 and y == M - 1:
            return visited[x][y][wall]
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if nx < 0 or ny < 0 or nx >= N or ny >= M :
                continue
            if visited[nx][ny][wall] == 1:
                continue
            if visited[nx][ny][wall] == 0:
                if graph[nx][ny] == 0:
                    q.append((nx, ny, wall))
                    visited[nx][ny][wall] = visited[x][y][wall] + 1
                
                if wall == 0  and graph[nx][ny] == 1:
                    q.append((nx, ny, 1))
                    visited[nx][ny][1] = visited[x][y][wall] + 1
    return -1

print(bfs())