def fibo(x):
    if x==1 or x==2:
        return 1
    return fibo(x-1) + fibo(x-2)

print(fibo(4))

#다이나믹 프로그래밍을 만족하는 조건
#1. 큰 문제를 작은 문제로 나눌 수 있다.
#2. 작은 문제에서 구한 정답은 그것을 포함하는 큰 문제에서도 동일하다.


#Top Down
d = [0]*100

def fiboDP(x):
    if x == 1 or x == 2:
        return 1
    
    if d[x] != 0:
        return d[x]
    d[x] = fiboDP(x-1) + fiboDP(x-2)

    return d[x]

print(fiboDP(99))

#Bottom Up
d = [0] * 100

d[1] = 1
d[2] = 1
n = 99

for i in range(3, n+1):
    d[i] = d[i-1] + d[i-2]

print(d[n])