"""
    큐의 구조 : 줄을 서는 구조와 비슷하다.
    FIFO(First-in, First-out) or LILO(Last-in Last-out)

    알아둘 용어
    Enqueue : 큐에 데이터를 넣는 기능
    Dequeue : 큐에서 데이터를 빼는 기능
"""

# Queue()로 큐 만들기(일반적인 큐, FIFO)
import queue

data_queue = queue.Queue()

data_queue.put("funcoding")
data_queue.put(1)

print(data_queue.qsize())

print(data_queue.get())

print(data_queue.get())

# LifoQueue()로 큐 만들기(LIFO)
data_queue = queue.LifoQueue()

data_queue.put("funcoding")
data_queue.put(1)

print(data_queue.qsize())

print(data_queue.get())

print(data_queue.get())