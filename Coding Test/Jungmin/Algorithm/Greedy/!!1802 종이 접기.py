import sys

T = int(sys.stdin.readline())

def check(start, end):
    if (end - start) == 2:
        if N[start] == N[end]:            
            return False
        else:
            return True
    mid = (end - start) // 2
    if check(start, mid-1) == False:
        return False
    if check(mid+1, end) == False:
        return False
    return True


for _ in range(T):
    N = str(sys.stdin.readline().rstrip())


    value = check(0, len(N)-1)

    if value:
        print('YES')
    else:
        print('NO')        
