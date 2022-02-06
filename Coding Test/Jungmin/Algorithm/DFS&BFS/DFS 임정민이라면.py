# 임정민의 생각은 잘못되었다.
# 단순한 Stack&Queue의 문제가 아님.
# 정확하게는 Recursion&Queue !!
# 재귀 중 스택을 이용하는 것

from collections import deque


def dfs(graph, start, visited):
    stack = deque([start])
    visited[start] = True
    while stack:
        v = stack.pop()
        print(v, end=' ')
        for i in graph[v]:
            if not visited[i]:
                stack.append(i)
                visited[i] = True



graph = [
    [],
    [2,3,8],
    [1,7],
    [1,4,5],
    [3,5],
    [3,4],
    [7],
    [2,6,8],
    [1,7]
]

visited = [False]*9

dfs(graph, 1, visited)