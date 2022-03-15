import sys
import copy

sys.setrecursionlimit(10**6)
N = int(sys.stdin.readline())
graph = []
min_arr = []
max_arr = []
for _ in range(N):
    li = list(map(int, sys.stdin.readline().split()))
    graph.append(li)
    min_arr.append(min(li))
    max_arr.append(max(li))






def dfs(x, y, l):
    if x < 0  or y < 0 or x >= N or y >= N:
        return False
    if graphcopy[x][y] > l:
        graphcopy[x][y] = l
        dfs(x-1, y, l)
        dfs(x, y-1, l)
        dfs(x+1, y, l)
        dfs(x, y+1, l)
        return True
    return False
f = []
for l in range(min(min_arr)-1, max(max_arr) + 1):
    result = 0
    graphcopy = copy.deepcopy(graph)
    for i in range(N):
        for j in range(N):
            if dfs(i, j, l) == True:
                result += 1
    f.append(result)

print(max(f))