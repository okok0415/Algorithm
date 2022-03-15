from re import T
import sys


N = int(sys.stdin.readline())
arrN = list(map(int, sys.stdin.readline().rsplit()))
M = int(sys.stdin.readline())
arrM = list(map(int, sys.stdin.readline().rsplit()))

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
    

for m in arrM:
    result = binary_search(arrN, m, 0, len(arrN))
    if result == None:
        print('no')
    else:
        print('yes')

