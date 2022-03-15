import sys


N = int(sys.stdin.readline())

arr = []
for _ in range(N):
    arr.append(sys.stdin.readline().rsplit()[0])

arr.sort(key=lambda x:(len(x), x))
f_arr = []
for i in range(len(arr)):
    if i == len(arr)-1:
        f_arr.append(arr[i])
        continue
    if arr[i] == arr[i+1]:
        pass    
    else:
        f_arr.append(arr[i])
    
for i in f_arr:
    print(i)