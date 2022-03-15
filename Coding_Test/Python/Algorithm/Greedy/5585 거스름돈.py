import sys


N = int(sys.stdin.readline())

N = 1000 - N
count = 0

while True:
    if N == 0:
        break
    
    if N >= 500:
        count += N // 500
        N -= (N//500)*500
    elif N >= 100:
        count += N // 100
        N -= (N//100)*100
    elif N >= 50:
        count += N // 50
        N -= (N//50)*50
    elif N >= 10:
        count += N // 10
        N -= (N//10)*10
    elif N >= 5:
        count += N // 5
        N -= (N//5)*5
    elif N >= 1:
        count += N // 1
        N -= (N//1)*1
    
print(count)