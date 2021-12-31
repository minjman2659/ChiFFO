from collections import deque

def solution(board):
    n = len(board)
    dX = [-1, 0, 1, 0]
    dY = [0, -1, 0, 1]
    
    queue = deque([])
    queue.append((0, 0, 0, 0))
    cost_board = [[0] * n for _ in range(n)]
    
    while queue:
        x, y, direct, cost = queue.popleft()
        
        for d in range(4):
            car_x = x + dX[d]
            car_y = y + dY[d]
            
            # 범위 벗어났는지, 장애물 있는지
            if 0 > car_x or car_x >= n or 0 > car_y or car_y >= n or board[car_x][car_y] == 1:
                continue
            
            # 시작점은 직선 도로부터 시작
            # 건설해야하는 도로 종류 확인 후 비용 결정
            if x == 0 and y == 0 or direct == d:
                current_cost = cost + 100
            else:
                current_cost = cost + 600
            
            if cost_board[car_x][car_y] == 0 or cost_board[car_x][car_y] >= current_cost:
                cost_board[car_x][car_y] = current_cost
                queue.append((car_x, car_y, d, current_cost))
    
    return cost_board[-1][-1]