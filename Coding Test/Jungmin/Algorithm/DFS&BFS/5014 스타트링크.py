from collections import deque
import sys


F, S, G, U, D = map(int, sys.stdin.readline().rsplit())

graph = [0] * (F+1)

dx = [U, -D]
def bsf(start):
    queue = deque()
    queue.append(start)
    graph[start] += 1
    while queue:
        v = queue.popleft()
        if v == G:
            return graph[v] -1
        
        for i in range(2):
            nx = v + dx[i]
            
            if nx < 1 or nx > F:
                continue
            if graph[nx] != 0:
                continue
            if graph[nx] == 0:
                graph[nx] = graph[v] + 1
                queue.append(nx)

    return 'use the stairs'

print(bsf(S))