from collections import Counter


def solution(clothes):
    counter = Counter(cloth[1] for cloth in clothes).values()

    result = 1
    for c in counter:
        result *= c + 1
    return result - 1