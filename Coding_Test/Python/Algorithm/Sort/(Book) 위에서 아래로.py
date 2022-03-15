import sys


N = int(sys.stdin.readline())

arr = []
for i in range(N):
    arr.append(int(sys.stdin.readline()))

def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[int(len(arr)/2)]

    left, equal, right = [],[],[]

    for i in arr:
        if i < pivot:
            left.append(i)
        elif i > pivot:
            right.append(i)
        else:
            equal.append(i)
    
    return quick_sort(left) + equal + quick_sort(right)



arr = quick_sort(arr)

for i in range(len(arr)-1,-1,-1):
    print(arr[i], end=' ')
