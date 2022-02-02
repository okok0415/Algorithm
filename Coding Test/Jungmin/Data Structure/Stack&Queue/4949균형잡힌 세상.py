import sys

while True:
    command = sys.stdin.readline()

    if command == ".\n":
        break

    s = []
    no = True
    for c in command:
        if c == "(":
            s.append(0)
        elif c == "[":
            s.append(1)
        elif c == ")":
            if len(s) == 0:
                no = False
                break
            else:
                if s[-1] == 0:
                    s.pop()
                elif s[-1] == 1:
                    no = False
                    break
        elif c == "]":
            if len(s) == 0:
                no = False
                break
            else:
                if s[-1] == 1:
                    s.pop()
                elif s[-1] == 0:
                    no = False
                    break

    if len(s) != 0:
        no = False

    if no == True:
        print("yes")
    else:
        print("no")
