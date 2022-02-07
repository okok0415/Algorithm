from collections import deque
import sys
T = int(sys.stdin.readline())

sys.setrecursionlimit(10**6)
def dfs(x, y):
    if x < 0 or x >= M or y < 0 or y >= N:
        return False
    if visited[x][y] == 1:
        visited[x][y] = 0
        dfs(x+1, y)
        dfs(x, y+1)
        dfs(x-1, y)
        dfs(x, y-1)
        return True
    return False
        
    
for i in range(T):
    BFS = []
    M,N,K = map(int, sys.stdin.readline().split())
    visited = []
    vir = []
    for i in range(M):
        vir = [0]*N
        visited.append(vir)
        vir = []
    for i in range(K):
        a, b = map(int, sys.stdin.readline().split())
        visited[a][b] = 1
    
    result = 0
    for i in range(M):
        for j in range(N):
            if dfs(i, j) == True:
                result += 1

    print(result)


