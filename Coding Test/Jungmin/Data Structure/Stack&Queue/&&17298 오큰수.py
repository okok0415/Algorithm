import sys

N = int(sys.stdin.readline())
s = list(map(int, sys.stdin.readline().split()))
r = []
stack = []

for i in range(N-1):
    count = 0
    stack.append(s[i])
    if s[i] < s[i+1]:
        while len(stack) != 0:
            count += 1
            stack.pop()
            r.append(s[i+1])


r.append(-1)    



print(r)