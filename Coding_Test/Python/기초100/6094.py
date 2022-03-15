n = int(input())
a = input().split()
mini = a[0]
for i in a:
    if int(mini) > int(i):

        mini = int(i)
print(int(mini))