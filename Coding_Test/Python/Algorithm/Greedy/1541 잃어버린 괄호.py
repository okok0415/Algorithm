import sys

formula = list(sys.stdin.readline().split("-"))
plus = []
minus = []

if formula[0].find('+'):
    li = formula[0].split('+')
    for i in li:
        plus.append(int(i))
else:
    plus.append(int(formula[0]))

for f in formula[1:]:
    if f.find('+'):
        fli = f.split('+')
        for i in fli:
            minus.append(int(i))
    else:
        minus.append(int(f))

result = 0
for p in plus:
    result += p

for m in minus:
    result -= m

print(result)