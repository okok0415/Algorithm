import sys


class Queue:
    queue = []
    count = 0
    def push(self, X):
        self.queue.append(X)
    
    def pop(self):
        if not self.queue or len(self.queue) <= self.count:
            return -1
        else:           
            self.count += 1
            return self.queue[self.count-1]
    def size(self):
        return len(self.queue) - self.count

    def empty(self):
        if not self.queue or len(self.queue) <= self.count:
            return 1
        else:
            return 0

    def front(self):
        if not self.queue or len(self.queue) <= self.count:
            return -1
        
        return self.queue[self.count]
    
    def back(self):
        if not self.queue or len(self.queue) <= self.count:
            return -1
        
        return self.queue[-1]

N = int(sys.stdin.readline())
q = Queue()
for i in range(N):
    command = sys.stdin.readline().split()

    if command[0] == 'push':
        q.push(command[1])        
    elif command[0] == 'pop':
        print(q.pop())
    elif command[0] == 'size':
        print(q.size())
    elif command[0] == 'empty':
        print(q.empty())
    elif command[0] == 'front':
        print(q.front())
    elif command[0] == 'back':
        print(q.back())