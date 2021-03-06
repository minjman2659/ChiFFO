from itertools import permutations

def isCheck(user, banned_id):
    for i in range(len(banned_id)):
        if len(user[i]) != len(banned_id[i]):
            return False
        
        for j in range(len(user[i])):
            if banned_id[i][j] == '*':
                continue
            if banned_id[i][j] != user[i][j]:
                return False
    return True

def solution(user_id, banned_id):
    answer = []
    userPermutation = permutations(user_id, len(banned_id))

    for user in userPermutation:
        if isCheck(user, banned_id):
            user = set(user)
            print(user)
            print(answer)
            if user not in answer:
                answer.append(user)
        
    return len(answer)

user_id = ["frodo", "fradi", "crodo", "abc123", "frodoc"]
banned_id = ["fr*d*", "*rodo", "******", "******"]
print(solution(user_id, banned_id))