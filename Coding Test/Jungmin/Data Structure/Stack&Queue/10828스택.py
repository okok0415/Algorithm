import sys
from collections import deque

N = sys.stdin.readline()
stack = deque([])

for i in range(0, int(N)):
    command = sys.stdin.readline().split()
    if command[0] == "push":
        stack.append(command[1])
    elif command[0] == "pop":
        if not stack:
            print(-1)
        else:
            print(stack.pop())
    elif command[0] == "size":
        print(len(stack))
    elif command[0] == "empty":
        if not stack:
            print(1)
        else:
            print(0)
    elif command[0] == "top":
        if not stack:
            print(-1)
        else:
            top = stack.pop()
            print(top)
            stack.append(top)
