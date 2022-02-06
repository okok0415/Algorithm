import sys


N = int(sys.stdin.readline())
graph = []

for i in range(N):
    graph.append(list(map(int, input())))

count = 0
def dfs(x, y, count):
    if x < 0 or x >= N or y < 0 or y >= N:
        return count
    if graph[x][y] == 1:
        count += 1
        graph[x][y] = 0
        count = dfs(x -1, y, count)
        count = dfs(x, y-1, count)
        count = dfs(x + 1, y, count)
        count = dfs(x, y + 1, count)
        return count
    return count
final = []

for i in range(N):
    for j in range(N):
        count = dfs(i,j, count)
        if count:
            final.append(count)
            count = 0

print(len(final))
final.sort()
for i in final:
    print(i)
