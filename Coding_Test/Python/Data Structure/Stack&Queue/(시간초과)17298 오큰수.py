import sys

N = int(sys.stdin.readline())
s = list(map(int, sys.stdin.readline().split()))
copys = s[:]
r = []
for i in s:
    if len(copys) == 1:
        r.append(-1)
        break
    no = True
    for j in copys[1:]:
        if i < j:
            r.append(j)
            copys = copys[1:]
            no = False
            break
    
    if no == True:
        r.append(-1)


for i in r:
    print(i, end= ' ')