import sys


K, N = map(int, sys.stdin.readline().split())
arr = []
for _ in range(K):
    arr.append(int(sys.stdin.readline()))

def binary_search(start, end):

    
    mid = (start + end) // 2
    if start > end:
        return end
    if mid == 0:
        return 1
    result = 0

    for i in range(K):
        result += arr[i] // mid
    if result >= N:
        return binary_search(mid+1, end)
    else:
        return binary_search(start, mid-1)

print(binary_search(0, max(arr)))