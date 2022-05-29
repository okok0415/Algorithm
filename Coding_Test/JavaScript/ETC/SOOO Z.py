import copy

T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    arr = [int(num) for num in input().split()]
    copyArr = copy.deepcopy(arr)
    copyArr.sort()
    count = 0
    while True:
        if arr == copyArr:
            break

        a = []
        b = []
        for i in range(len(arr)):
            if i % 2 == 0:
                a.append(i)
            else:
                b.append(i)

        for i in range(min(len(a), len(b))):
            if arr[a[i]] > arr[b[i]]:
                tmp = arr[b[i]]
                arr[b[i]] = arr[a[i]]
                arr[a[i]] = tmp

        for i in range(min(len(a) - 1, len(b))):
            if arr[b[i]] > arr[a[i + 1]]:
                tmp = arr[a[i + 1]]
                arr[a[i + 1]] = arr[b[i]]
                arr[b[i]] = tmp

        count += 1

    print(f"#{test_case} {count}")
