# TEST INPUT
a = ['magical unicorns',19,'hello',98.98,'world']
b = [2,3,1,7,4,12]
c = ['magical','unicorns']
# nasty edge case...
# d = ['magical unicorns',0,'hello',0,'world']


def typeList(var):
    resultSum = 0
    sumCount = 0
    resultStr = ""
    strCount = 0
    isMixed = False
    for i in var:
        if(type(i) is int):
            resultSum += i
            sumCount = sumCount + 1
        if(type(i) is str):
            resultStr += " " + i
            strCount = strCount + 1
    if(sumCount and strCount): #doesn't handle all 0 ints edge cases...
        print "The list you entered is of mixed type"
        print "String: " + resultStr
        print "Sum: " + str(resultSum)
    elif(strCount):
        print "The list you entered is of string type"
        print "String: " + resultStr
    else:
        print "The list you entered is of integer type"
        print "Sum: " + str(resultSum)

typeList(a)
print "#====#"
typeList(b)
print "#====#"
typeList(c)
print "#====#"
# typeList(d)
