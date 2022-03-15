import sys

T = int(sys.stdin.readline())

for i in range(T):
    s = []
    command = sys.stdin.readline()
    no = True
    for c in command:
        if c == "(":
            s.append(0)
        if c == ")":
            if len(s) == 0:
                no = False
                break
            else:
                s.pop()

    if len(s) > 0:
        no = False

    if no:
        print("YES")
    else:
        print("NO")
