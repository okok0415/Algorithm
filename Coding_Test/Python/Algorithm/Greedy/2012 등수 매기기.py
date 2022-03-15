import sys


N = int(sys.stdin.readline())

li = []
for _ in range(N):
    li.append(int(sys.stdin.readline()))

li.sort()


count = 0

for i in range(len(li)):
    if i+1 > li[i]:
        count += i+1 - li[i]
    else:
        count += li[i] - (i+1)
        

print(count)