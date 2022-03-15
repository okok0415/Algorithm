arr = [6, 5, 3, 1, 8, 7, 2, 4]

def merge_sort(arr):
    if len(arr) < 2:
        return arr
    
    mid = int(len(arr) / 2)
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    merged_arr = []
    l = r = 0
    while l< len(left) and r < len(right):
        if left[l] < right[r]:
            merged_arr.append(left[l])
            l += 1
        else:
            merged_arr.append(right[r])
            r += 1
    
    merged_arr += left[l:]
    merged_arr += right[r:]
    return merged_arr

print(merge_sort(arr))