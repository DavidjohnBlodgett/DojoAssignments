class Call(object):
    def __init__(self,id,name,phoneNumber,time,reason):
        self.id = id
        self.name = name
        self.phoneNumber = phoneNumber
        self.time = time
        self.reason = reason
    def display(self):
        print "Id:", self.id
        print "Name:", self.name
        print "PhoneNumber:", self.phoneNumber
        print "Time:", self.time
        print "Reason:", self.reason
        return self

class CallCenter(object):
    def __init__(self):
        self.calls = []
        self.queueSize = 0
        self.updateQueue()
    def add(self,c):
        self.calls.append(c)
        self.updateQueue()
        return self
    def remove(self):
        del self.calls[0]
        self.updateQueue()
        return self
    def removeThis(self,phoneNumber):
        for i in self.calls:
            if i.phoneNumber is phoneNumber:
                self.calls.remove(i)
        self.updateQueue()
        return self
    def sort(self):
        self.calls.sort(key=self.giveTime)
        return self
    def info(self):
        print "####==== CALL QUEUE ====####"
        for i in self.calls:
            print "Name:", i.name
            print "Phone Number:", i.phoneNumber
            print "=============================="
        print "Queue Size:", self.queueSize
        print "\n"
        return self

    # private methods...
    def updateQueue(self):
        self.queueSize = len(self.calls)
    def giveTime(self,elem):
        return elem.time



# test
idNum =  1987
name = "bar"
time = 15
reason = "I am dead inside..."

call1 = Call(idNum,name,9273927,time,reason)
call2 = Call(idNum,name,0000675,time,reason)
call1.display()

callCenter = CallCenter()
callCenter.add(call1).add(call2).info()
#callCenter.remove().debug()
callCenter.info()
callCenter.info().removeThis(9273927).info()
callCenter.remove().info()

print "+++++++++++++++++++++++++++++++++++++++++++++++"

call1 = Call(idNum,"A",01,01,reason)
call2 = Call(idNum,"B",02,02,reason)
call3 = Call(idNum,"C",03,03,reason)
call4 = Call(idNum,"D",04,04,reason)


callCenter.add(call4).add(call3).add(call2).add(call1).info().sort().info()
