import sys


N = int(sys.stdin.readline())

dic = {}
for _ in range(N):
    x, y = sys.stdin.readline().split()
    if int(x) in dic:
        dic[int(x)].append(y)
    else:
        dic[int(x)] = list([])
        dic[int(x)].append(y)

sorted_dict = sorted(dic.items())
for k, i in sorted_dict:
    for j in range(len(i)):
        print(k, i[j])