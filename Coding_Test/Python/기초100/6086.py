a = int(input())
result = 0
plus = 0
while True:
    plus += 1
    result += plus
    if result >= a:
        print(result)
        break