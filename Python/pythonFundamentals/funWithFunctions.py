def odd_even(num):
    result = ""
    for i in range(1,num+1):
        if(i%2):
            result = "odd"
        else:
            result = "even"
        print "Number is {0}.  This is an {1} number.".format(i,result)

# test output...
#odd_even(10) #TODO: change to 2000 when done...


def multiply(list,num):
    for i in range(0,len(list)):
        list[i] *= num
    return list

# test output...
a = [2,4,10,16]
b = multiply(a,5)
print b

def layered_multiples(list):
    print list
    newList = []
    for i in range(0,len(list)):
        temp = []
        for x in range(0,list[i]):
            temp.append(1)
        newList.append(temp)
    return newList

# test output...

x = layered_multiples(multiply([2,4,5],3))
print x
