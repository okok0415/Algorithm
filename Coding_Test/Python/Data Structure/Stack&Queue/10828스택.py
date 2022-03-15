import sys


class Stack:
    stack = []

    def push(self, x):
        self.stack.append(x)

    def pop(self):
        if len(self.stack) == 0:
            return -1
        else:
            r = self.stack[-1]
            del self.stack[-1]
            return r

    def size(self):
        return len(self.stack)

    def empty(self):
        if len(self.stack) == 0:
            return 1
        else:
            return 0

    def top(self):
        if len(self.stack) == 0:
            return -1
        else:
            return self.stack[-1]


N = sys.stdin.readline()
s = Stack()
for i in range(0, int(N)):
    command = sys.stdin.readline().split()
    if command[0] == "push":
        s.push(command[1])
    elif command[0] == "pop":
        print(s.pop())
    elif command[0] == "size":
        print(s.size())
    elif command[0] == "empty":
        print(s.empty())
    elif command[0] == "top":
        print(s.top())
