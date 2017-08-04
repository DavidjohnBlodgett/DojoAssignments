class MathDojo(object):
    def __init__(self):
        self.result = 0
    def add(self,*arg):
        for i in arg:
            if(type(i) is list or type(i) is tuple):
                 for x in i:
                     self.result += x
            else:
                self.result += i
        return self
    def subtract(self,*arg):
        for i in arg:
            if(type(i) is list or type(i) is tuple):
                temp = 0
                for x in i:
                     temp += x
                self.result -= temp
            else:
                self.result -= i
        return self


md = MathDojo()
print md.add([4]).result
md2 = MathDojo()
print md2.add([1],3,4).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract(2, [2,3], [1.1, 2.3]).result

#28.15
