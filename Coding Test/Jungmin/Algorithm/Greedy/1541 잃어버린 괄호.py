import sys

minus = 0

arr = sys.stdin.readline().split('-')
plus = list(map(int, arr[0].split('+')))
for i in range(1, len(arr)):
    arr[i].replace('-', '+')

for i in range(1, len(arr)):
    minus += list(map(int, arr[i].split('+')))

result = 0

for i in plus:
    result += i;

for i in minus:
    result -= i;

print(result)