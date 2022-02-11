import sys

N = int(sys.stdin.readline())
arrN = list(map(int, sys.stdin.readline().split()))

M = int(sys.stdin.readline())
arrM = map(int, sys.stdin.readline().split())

arrN.sort()

def binary_search(arr, target, start, end):
    if start > end:
        return None
    
    mid = (start + end) // 2
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, start, mid-1)
    else:
        return binary_search(arr, target, mid+1, end)


for i in arrM:
    result  = binary_search(arrN, i, 0, len(arrN)-1)
    if result == None:
        print(0)
    else:
        print(1)