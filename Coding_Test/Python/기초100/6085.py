a,b,c = map(int, input().split())
print(format(a*b*c/8/1024/1024, ".2f"), 'MB')