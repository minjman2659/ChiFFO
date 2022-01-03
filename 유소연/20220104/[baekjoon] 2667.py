n = int(input())
grid = []
num = []
apt_cnt = 0

for i in range(n):
    grid.append(list(map(int, input())))
        
count = 0

def dfs(i, j):
    global count
    if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] != 1:
        return
    grid[i][j] = 0
    count += 1

    dfs(i + 1, j)
    dfs(i - 1, j)
    dfs(i, j + 1)
    dfs(i, j - 1)


for i in range(len(grid)):
    for j in range(len(grid[0])):
        if grid[i][j] == 1:
            dfs(i, j)
            num.append(count)
            count = 0
            apt_cnt += 1

num.sort()
print(apt_cnt)
for i in num:
    print(i)
    
