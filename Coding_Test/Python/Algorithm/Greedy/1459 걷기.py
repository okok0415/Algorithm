import sys


X, Y, W, S = map(int, sys.stdin.readline().split())

answer = 0
if W*2 < S:
    answer = W * (X+Y)
else:
    if Y > X:
        tmp = Y
        Y = X
        X = tmp
    if (Y != 0):
        answer += S*Y
        X = X-Y
        Y = 0

    if W > S:
        answer += S*(X // 2)*2 + W*(X%2)
    else:
        answer += W*X




print(answer)