import sys


N, M = map(int, sys.stdin.readline().split())

tree = list(map(int, sys.stdin.readline().split()))

def binary_search(start, end):
    if start > end:
        return end
    
    mid = (start + end) // 2


    result = 0
    for i in tree:
        if i >= mid:
            result += i-mid

    if result == M:
        return mid
    elif result > M :
        return binary_search(mid+1, end)
    else:
        return binary_search(start, mid-1)


print(binary_search(1, max(tree)))