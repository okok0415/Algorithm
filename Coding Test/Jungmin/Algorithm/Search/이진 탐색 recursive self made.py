def binary_search(arr, target, start, end):
    if start > end:
        return None
    
    mid = (start + end)//2
    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, start, mid-1)
    elif arr[mid] < target:
        return binary_search(arr, target, mid+1, end)

    
arr = [1,2,3,4,5,6,7,8,9,10]
print(binary_search(arr, 6, 0, len(arr)-1))
