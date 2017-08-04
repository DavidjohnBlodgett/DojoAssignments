
# FIND REPLACE
def findAndReplace(str):
    result = str
    print str.find("day")
    result = result.replace("day","month", 1)
    print result

words = "It's thanksgiving day. It's my birthday,too!"
findAndReplace(words)

print "####"

# MIN/MAX
def minAndMax(list):
    print "max = " + str(max(list))
    print "min = " + str(min(list))

stuff = [3,4,5,6,1,2]

minAndMax(stuff)

print "####"

# FIRST/LAST
def firstAndLast (list):
    result = []
    print list[0]
    result.append(list[0])
    print list[len(list)-1]
    result.append(list[len(list)-1])
    print result
    return result

firstAndLast(stuff)

print "####"
# NEW LIST
x = [19,2,54,-2,7,12,98,32,10,-3,6]

def newList(list):
    list.sort()
    print list
    newList1 = list[0:len(list)/2]
    newList2 = list[len(list)/2:len(list)]
    newList2.insert(0,newList1)
    print newList2


newList(x)

#EOF
