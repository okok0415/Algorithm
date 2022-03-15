a = int(input())
result = 0
for i in range(1, 1000):
    result += i
    if result >= a:
        print(i)
        break