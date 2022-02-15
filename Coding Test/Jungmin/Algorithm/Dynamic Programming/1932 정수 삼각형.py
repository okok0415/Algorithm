import sys


N = int(sys.stdin.readline())
arr = []
for _ in range(N):
    arr.append(list(map(int, sys.stdin.readline().split())))



for i in range(1, N):
    for j in range(len(arr[i])):
        if j == 0:
            arr[i][j] = arr[i][j] + arr[i-1][j]
        elif j == len(arr[i])-1:
            arr[i][j] = arr[i][j] + arr[i-1][j-1]
        else:
            arr[i][j] = max(arr[i-1][j-1], arr[i-1][j]) + arr[i][j]


print(max(arr[N-1]))