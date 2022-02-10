from collections import Counter
import sys

numbers = []
for _ in range(int(sys.stdin.readline())):
    num = int(sys.stdin.readline())
    numbers.append(num)

numbers.sort()

cnt = Counter(numbers).most_common(2)
print(format(sum(numbers) / len(numbers), ".0f"))
print(numbers[len(numbers) // 2])

if len(numbers) > 1:
    if cnt[0][1] == cnt[1][1]:
        print(cnt[1][0])
    else:
        print(cnt[0][0])
else:
    print(cnt[0][0])

print(max(numbers) - min(numbers))