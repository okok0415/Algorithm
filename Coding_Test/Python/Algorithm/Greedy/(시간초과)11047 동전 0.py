#그냥 나누고 몫으로 하면 시간적인 이득을 볼 수 있다.
import sys

N, K = map(int, sys.stdin.readline().split())
coin = []
count = 0

for i in range(N):
    coin.append(int(sys.stdin.readline()))

while K != 0:
    biggest = coin[-1]
    if K >= biggest:
        K -= biggest
        count += 1
    else:
        coin.pop()

print(count)
