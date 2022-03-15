import sys

N, K = map(int, sys.stdin.readline().split())

A = list(map(int, sys.stdin.readline().split()))
B = list(map(int, sys.stdin.readline().split()))

def quick_sort(arr, reverse=False):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[int(len(arr) / 2)]
    left, equal, right = [],[],[]

    for i in arr:
        if i < pivot:
            left.append(i)
        elif i > pivot:
            right.append(i)
        else:
            equal.append(i)
        
    if reverse:
        return quick_sort(right) +  equal +  quick_sort(left)
    else:
        return quick_sort(left) +  equal + quick_sort(right)

A = quick_sort(A)
B = quick_sort(B, reverse=True)

for i in range(K):
    A[i] = B[i]

result = 0
for a in A:
    result += a

print(result)