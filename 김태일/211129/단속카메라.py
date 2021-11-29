def solution(routes):
    answer = 1
    routes.sort(reverse=True)
    
    now = routes[0][0]
    
    for go in routes[1:]:
        if go[1] >= now:
            continue
        else:
            now = go[0]
            answer += 1
    
    return answer

routes = [[-20,-15], [-14,-5], [-18,-13], [-5,-3]]
print(solution(routes))

# ex) now:-5 / 두 번째 차량 나가는 시점:-5 -> 단속카메라에 걸리기 때문에 무시하고 넘어가기
#     now:-5 / 세 번째 차량 나가는 시점:-13 -> 단속카메라에 걸리지 않기 때문에 새로운 카메라 설치
#     now=-18 /  answer = 2
#     now = -18 / 네 번째 차량 나가는 시점: 16 -> 단속카메라에 걸리기 때문에 무시하고 넘어가기