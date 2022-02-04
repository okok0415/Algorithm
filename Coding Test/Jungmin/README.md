## input?

input() 대신 sys.stdin.readline()가 시간적으로 유리

## sort?

list 안의 tuple을 어떻게 sort할까?

출처: https://hansuho113.tistory.com/28

### 오름차순
tuple_list.sort(key=lambda x: x[0])

### 내림차순
tuple_list.sort(key=lambda x: x[0], reverse=True)
or
tuple_list.sort(key=lambda x: -x[0])


튜플의 첫 번째 원소로 정렬, 이후 같은 값이 나오면 두 번째 원소 정렬하는 방식
tuple_list.sort(key=lambda x: (x[0], x[1]))

튜플의 두 번째 원소로 정렬, 이후 같은 값이 나오면 첫 번째 원소 정렬하는 방식
tuple_list.sort(key=lambda x: (x[1], x[0]))


오름차순, 내림차순은 reverse 혹은 - 부호를 사용하여 적절히 사용하면 된다.