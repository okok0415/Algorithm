from collections import deque
import sys


N = int(sys.stdin.readline())

dx = [1, 2, 2, 1, -1, -2, -2, -1]
dy = [2, 1, -1, -2, -2, -1, 1, 2]

def bfs(x, y, fx, fy):
    queue = deque()
    queue.append((x, y))
    graph[x][y] += 1
    if x == fx and y == fy:
        return 0

    while queue:
        x, y = queue.popleft()

        for i in range(8):
            nx = x + dx[i]
            ny = y + dy[i]



            if nx < 0 or ny < 0 or nx >= I or ny >= I:
                continue
            if graph[nx][ny] > 0:
                continue
            if graph[nx][ny] == 0:
                graph[nx][ny] = graph[x][y] + 1
                queue.append((nx, ny))
            if nx == fx and ny == fy:
                return graph[nx][ny]-1
    return 0            

for i in range(N):
    I = int(sys.stdin.readline())
    graph = []
    for i in range(I):
        graph.append([0]*I)
    x, y = map(int, sys.stdin.readline().split())
    fx, fy = map(int, sys.stdin.readline().split())

    print(bfs(x,y,fx,fy))
