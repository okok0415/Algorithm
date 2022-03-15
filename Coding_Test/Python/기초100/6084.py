a,b,c, d = map(int, input().split())
print(format(a*b*c*d/8/1024/1024, ".1f"), 'MB')