"""
    배열의 장점 : 빠른 접근 가능
    배열의 단점 : 데이터 추가/삭제가 쉽지 않음. 최대 길이를 미리 설정해야 됨.
"""

# 1차원 배열 : 리스트로 구현 시
data = [1, 2, 3, 4, 5]
print(data)

# 2차원 배열 : 리스트로 구현 시
data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(data)

# 예재 다음 dataset 에서 전체 이름 안에 M이 몇번 나왔을까?
dataset = ["Mactorial", "Moral"]
m_count = 0
for data in dataset:
    for index in range(len(data)):
        if data[index] == "M":
            m_count += 1

print(m_count)