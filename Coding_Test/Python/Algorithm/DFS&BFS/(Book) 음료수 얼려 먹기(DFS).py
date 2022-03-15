import sys


def solution(N):
    b = format(int(N), "b")
    b = list(map(int, b))

    z_list = []
    f_list = []
    for i in range(len(b)):
        if b[i] == 1:
            z_list.append(i)

    if len(z_list) < 2:
        return 0
    else:
        for i in range(len(z_list) - 1):
            f_list.append(z_list[i + 1] - z_list[i])

        return max(f_list) - 1


N = input()
print(solution(N))