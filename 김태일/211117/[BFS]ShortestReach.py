from collections import defaultdict, deque

def bfs(n, m, edges, s):
    answer = []
    graph = defaultdict(list)
    
    for node1, node2 in edges:
        graph[node1].append(node2)
        graph[node2].append(node1)
    
    dist = [-1] * (len(graph) + 2)
    dist[s] = 0
    q = deque([s])
    
    while q:
        v = q.popleft()
        for i in graph[v]:
            if dist[i] < 0:
                q.append(i)
                dist[i] = dist[v] + 6
    
    for i in range(1, n + 1):
        if i != s:
            answer.append(dist[i])
            
    return answer
n = 5
m = 3
edges = [[1,2],[1,3],[3,4]]
s = 1
print(bfs(n, m, edges, s))