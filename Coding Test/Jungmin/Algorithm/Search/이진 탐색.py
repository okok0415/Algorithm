def binary_search(arr, value):
    first, last = 0, len(arr)

    while first <= last:
        mid = (first + last) // 2
        if arr[mid] == value:
            return mid
        if arr[mid] > value:
            last = mid - 1
        else:
            first = mid + 1
    
    return False

arr = [1,2,3,4,5,6,7,8,9,10]
result_index = binary_search(arr, 6)
print(result_index, arr[result_index])