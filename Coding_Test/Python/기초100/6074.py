a = input()
result = 'a'
print(result)
while result != a:
    result = chr(ord(result) + 1)
    print(result)
