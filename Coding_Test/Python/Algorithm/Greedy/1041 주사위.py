import sys


N = int(sys.stdin.readline())

arr = []
arr = list(map(int, sys.stdin.readline().rsplit()))

dice = [min(arr[0], arr[5]), min(arr[1], arr[4]), min(arr[2], arr[3])]

dice.sort()

if N == 1:
    print(sum(arr)-max(arr))
else:
    print(sum(dice)*4 + (dice[0]+dice[1])*((N-1)*4 + (N-2)*4) + dice[0]*(((N-2)**2 + (N-2))*4 + (N-2)**2))
