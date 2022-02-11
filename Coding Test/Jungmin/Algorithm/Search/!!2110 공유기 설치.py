from multiprocessing.connection import answer_challenge
import sys


N, C = map(int, sys.stdin.readline().split())

arr = []
for i in range(N):
    arr.append(int(sys.stdin.readline()))

arr.sort()

def binary_search(start, end):
    while start <=end:
        mid = (start + end) // 2
        current = arr[0]
        count = 1

        for i in range(1, len(arr)):
            if arr[i] >= current+mid:
                count += 1
                current = arr[i]
        
        if count >= C:
            start = mid + 1
            global answer
            answer = mid
        else:
            end = mid - 1


start = 1
end = arr[-1] - arr[0]
answer = 0

binary_search(start, end)
print(answer)

