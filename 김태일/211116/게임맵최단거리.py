from collections import deque

def solution(maps):
    # BFS
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    
    row = len(maps)
    col = len(maps[0])
    
    graph = [[-1 for _ in range(col)] for _ in range(row)]
    
    queue = deque()
    queue.append([0, 0])
    
    graph[0][0] = 1
    
    while queue:
        y, x = queue.popleft()
        
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            
            if 0 <= ny < row and 0 <= nx < col and maps[nx][ny] == 1:
                if graph[ny][nx] == -1:
                    graph[ny][nx] = graph[y][x] + 1
                    queue.append([ny, nx])
    return graph[-1][-1]