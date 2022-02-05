import sys

formula = list(sys.stdin.readline().split("-"))

plus = formula[0]
minus = formula[1:]
plus_result = []
minus_result = []

if plus.find("+") == -1:
    plus_result.append(int(plus))
else:
    a = plus.split("+")
    for i in a:
        plus_result.append(i)
if len(minus) == 1:
    if minus[0].find("+") == -1:
        minus_result.append(int(minus))
    else:
        for m in minus:
            a = m.split("+")
            for i in a:
                minus_result.append(i)
else:
    for m in minus:
        a = m.split("+")
        for i in a:
            minus_result.append(i)

final = 0
for i in plus_result:
    final += int(i)

for i in minus_result:
    final -= int(i)

print(final)