from collections import deque

T = int(input())


for test_case in range(1, T + 1):
    N = int(input())
    graph = [[] for i in range(N + 1)]
    first = []

    for i in range(N):
        arr = [int(num) for num in input().split()]
        if len(arr) == 1:
            first.append(i + 1)
        else:
            for j in arr[1:]:
                graph[j].append(i + 1)

    visited = [1]
    for i in range(len(graph) - 1):
        visited.append(0)
    count = 0

    def bfs(v, count):
        queue = deque(v)

        while queue:
            v = queue.popleft()
            visited[v] = 1
            for i in graph[v]:
                if visited[i] == 0:
                    queue.append(i)
                    visited[i] = 1
                    count += 1
        if visited.__contains__(0):
            return -1
        else:
            return count + 1

    print(f"#{test_case} {bfs(first, count)}")
