import sys

N = int(sys.stdin.readline())
arr = []

for i in range(N):
    x, y = sys.stdin.readline().split()
    y = int(y)
    arr.append((x, y))

arr = sorted(arr, key=lambda student: student[1])

for student in arr:
    print(student[0], end=' ')