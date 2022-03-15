import sys

n = int(sys.stdin.readline())
s = []
op = []
count = 1
no = True
for i in range(n):
    command = int(sys.stdin.readline())
    while count <= command:
        s.append(count)
        op.append('+')
        count += 1
    if s[-1] == command:
        s.pop()
        op.append('-')
    else:
        no = False

if no == False:
    print('NO')
else:
    for i in op:
        print(i)

    
