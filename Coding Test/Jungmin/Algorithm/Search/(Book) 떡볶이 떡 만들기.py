import sys


N, M = map(int, sys.stdin.readline().split())
arr = list(map(int, sys.stdin.readline().split()))

def binary_search(start, end):
    while(start <= end):
        global r
        result = 0
        mid = (start + end) // 2

        for i in arr:
            if i >= mid:
                result += i-mid
        
        if result >= mid:
            r = mid
            end = mid-1
        else:
            start = mid+1


r = 0
binary_search(0, len(arr))

print(r)