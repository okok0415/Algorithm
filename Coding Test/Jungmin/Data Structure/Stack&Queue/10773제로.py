import sys

K = int(sys.stdin.readline())
s = []
for i in range(0, K):
    command = int(sys.stdin.readline())
    if command == 0:
        s.pop()
    else:
        s.append(command)
result = 0
for item in s:
    result += item

print(result)