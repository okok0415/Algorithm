import sys


arr = sys.stdin.readline()
d = len(arr)
for b in range(0, len(arr), 10):
    print(arr[b : b + 10])
