import sys


N = int(sys.stdin.readline())

for i in range(1, N + 1):
    for j in range(N - i, 0, -1):
        print(" ", end="")
    for j in range(i):
        print("*", end="")
    for j in range(i - 1):
        print("*", end="")
    print()