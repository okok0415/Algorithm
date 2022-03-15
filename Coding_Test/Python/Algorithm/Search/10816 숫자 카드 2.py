import sys
from collections import Counter


N = int(sys.stdin.readline())
arrN = list(map(int, sys.stdin.readline().rsplit()))
M = int(sys.stdin.readline())
arrM = list(map(int, sys.stdin.readline().rsplit()))

cnt = Counter(arrN)

for i in arrM:
    print(cnt[i], end=' ')