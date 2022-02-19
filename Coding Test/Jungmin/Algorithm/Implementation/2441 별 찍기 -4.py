import sys


N = int(sys.stdin.readline())

a = 0
for i in range(N):
    for j in range(i):
        print(" ", end="")
    for j in range(N - i):
        print("*", end="")
    print()