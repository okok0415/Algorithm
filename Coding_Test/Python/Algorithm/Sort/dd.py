def solution(N):
    b = format(N, "b")
    count = 0
    z_list = []
    for i in range(len(b)):
        if b[i] == 1:
            count += 1
            z_list.append(i)
    if i < 2:
        return 0
    else:
        return z_list


print(solution(33))
