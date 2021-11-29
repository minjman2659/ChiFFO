import heapq

def solution(N, road, K):
    INF = int(1e9)
    graph = [[] for _ in range(N+1)]
    distance = [INF] * (N+1)
    
    # 간선 정보 저장하기 
    for r in road:
        start, end, cost = r
        # 양방향
        graph[start].append((end,cost))
        graph[end].append((start,cost))

    dijkstra(start = 1, distance = distance, graph = graph)
    
    return len([d for d in distance if d <= K])

# 다익스트라
def dijkstra(start, distance, graph):
    q = []
    distance[start] = 0
    heapq.heappush(q, (0, start))
    
    while q:
        dist, now = heapq.heappop(q)
        # 이미 방문했거나, 최단거리가 아닌경우
        if distance[now] < dist:
            continue
        # 연결되어 있는 노드에 대해
        for i in graph[now]:
            cost = dist + i[1]
            # 현재 정보보다 더 적은 시간이 필요한 경우 갱신
            if cost < distance[i[0]]:
                distance[i[0]] = cost
                heapq.heappush(q, (cost, i[0]))

N = 5
road = 	[[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]]
K = 3
print(solution(N, road, K))