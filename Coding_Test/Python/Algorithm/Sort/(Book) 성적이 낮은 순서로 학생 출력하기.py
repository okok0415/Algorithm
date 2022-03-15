import sys

N = int(sys.stdin.readline())
arr = []

for i in range(N):
    x, y = sys.stdin.readline().split()
    y = int(y)
    arr.append((x, y))

def quick_sort(arr):
    print(arr)
    if len(arr) <= 1:
        return arr
    
    pivot = arr[int(len(arr)/2)]
    left, equal, right = [],[], []
    for i in arr:
        if i < pivot:
            left.append(i)
        elif i> pivot:
            right.append(i)
        else:
            equal.append(i)
        
    return quick_sort(left) + equal + quick_sort(right)

print(quick_sort(arr[:][1]))