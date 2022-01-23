import sys
read = sys.stdin.readline
inf = sys.maxsize

D, N = map(int, read().split())
oven = list(map(int, read().split()))
pizza = list(map(int, read().split()))

for i in range(1, D):
    oven[i] = min(oven[i], oven[i - 1])
    
piled_location = 0 # 피자가 어디 쌓이는지
lp, rp = 0, len(oven) - 1

for dough in pizza:
    is_piled = False # False면 피자를 못쌓는다는 뜻
    
    while lp <= rp:
        mid = (lp + rp) // 2
        diameter = oven[mid]
        
        if diameter >= dough:
            lp = mid + 1
            piled_location = mid
            is_piled = True
        else:
            rp = mid - 1
        
    if not is_piled:
        piled_location = -1
        break
      
    lp = 0
    rp = piled_location - 1
    
if piled_location == -1:
    print(0)
else:
    print(piled_location + 1)