import sys


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


N = int(sys.stdin.readline())
arr = []
for i in range(N):
    arr.append(int(sys.stdin.readline()))

final_arr = quick_sort(arr)

for i in final_arr:
    print(i)
