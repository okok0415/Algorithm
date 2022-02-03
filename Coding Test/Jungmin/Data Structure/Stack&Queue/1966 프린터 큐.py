from collections import deque
import sys

T = int(sys.stdin.readline())
def max(q):
    mx = 0
    for i in q:
        if mx < i:
            mx = i
    
    return mx


for i in range(T):
    N, M = map(int, sys.stdin.readline().split())
    document = list(map(int, sys.stdin.readline().split()))
    q = deque()
    for i in document:
        q.appendleft(i)
         


    result = 0
    mx = max(q)
    
    while True:
        pop = q.pop()
        if M == 0:
            if mx <= pop:
                result += 1
                print(result)
                break
            else:
                q.appendleft(pop)
                M += len(q)-1
        else:
            if mx <= pop:
                mx = max(q)
                result += 1
            else:
                q.appendleft(pop)
            
            M -= 1




