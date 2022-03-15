from collections import deque
import sys

T = int(sys.stdin.readline())
for i in range(T):
    p = sys.stdin.readline().strip("\n")
    n = int(sys.stdin.readline())
    x = sys.stdin.readline().strip("[""]\n")
    xi = list(map(str, x.split(",")))
    R = True
    result = deque()
    q = deque()
    no = True
    for i in xi:
        q.append(i)


    for c in p:
        if xi == [''] and c=='D':
            no = False
            break
        elif xi == [''] and c=='R':
            continue            


        if c=='R':
            R = not R
        elif c =='D' and len(q)> 0 :
            if R:
                q.popleft()
            else:
                q.pop()
        else:
            no = False
            break
    if no:
        if R:
            print("[", end='')
            while len(q) != 0:
                if len(q) == 1:
                    print(q.popleft(), end='')
                else:
                    print(q.popleft(), end=',')
            print(']')
        else:
            print("[", end='')
            while len(q) != 0:
                if len(q) == 1:
                    print(q.pop(), end='')
                else:
                    print(q.pop(), end=',')
            print(']')
    else:
        print('error')