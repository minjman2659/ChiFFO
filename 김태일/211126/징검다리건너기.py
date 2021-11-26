# 이진탐색을 사용해야 시간초과 문제 해결 가능
def solution(stones, k):
    answer = 0
    left, right = 1, max(stones)
    while left <= right:
        mid = (left + right) // 2
        jump = 0
        flag = True
        print(mid)
        for stone in stones:
            if stone - mid <= 0:
                jump += 1
                if jump == k:
                    flag = False
                    break
            else:
                jump = 0
        
        if flag:
            left = mid + 1
            answer = max(answer, mid + 1)
        else:
            right = mid - 1
    
    return answer