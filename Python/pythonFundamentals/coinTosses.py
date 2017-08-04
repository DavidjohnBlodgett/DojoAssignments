import random

def coinToss(num):
    print "Starting he program..."
    count = 0
    face = ""
    headCount = 0
    tailCount = 0
    for i in range(0,num):
        randomNum = round(random.random())
        count = count + 1
        if(randomNum == 1.0):
            face = "head"
            headCount = headCount + 1
        else:
            face = "tail"
            tailCount = tailCount + 1
        result = "Attempt #{0}: Throwing a coin... It's a {1}! ... Got {2} head(s) so far and {3} tail(s) so far".format(count,face,headCount,tailCount)
        print result

# test output
coinToss(5000)
