import sys


N = int(sys.stdin.readline())
"""
arr = []
result = 0
for i in range(N):
    M = int(sys.stdin.readline())
    arr.append(M)
    result += M

def quick_sort(arr):
    if len(arr) <=1 :
        return arr
    pivot = arr[int(len(arr) / 2)]

    left, equal, right = [],[],[]

    for i in arr:
        if i< pivot:
            left.append(i)
        elif i> pivot:
            right.append(i)
        else:
            equal.append(i)
        
    return quick_sort(left) + equal + quick_sort(right)

sort = quick_sort(arr)
"""
n_list = [0] * 8001
for _ in range(N):
    n_list[int(sys.stdin.readline())] += 1

for i in range(8001):
    if n_list[i] != 0:
        for j in range(n_list[i]):
            


print(format(result/N, ".0f"))
print(sort[int(len(sort)/2)])
