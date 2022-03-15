import sys

while True:
    try:
        print(sys.stdin.readline())
    except EOFError:
        break