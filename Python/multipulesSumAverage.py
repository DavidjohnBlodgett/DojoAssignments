
# function to print odd numbers from 1 to a given num...
def printOdds(num):
    for i in range(1,num+1):
        if(i % 2):
            print i

printOdds(1000)

# function to print multipules of 5 from 5 to a given num...
def multiOfFive(num):
    for i in range(5,num+1):
        print i * 5

multiOfFive(1000000)

# function to print the sum of a given list's elements...
def sum(list):
    result = 0
    for i in list:
        result += i
    return result

a = [1, 2, 5, 10, 255, 3]
print sum(a)

# function to print the average of a given list's elements...
def average(list):
    result = 0
    for i in list:
        result += i
    return result/len(list)

a = [1, 2, 5, 10, 255, 3]
print average(a)
