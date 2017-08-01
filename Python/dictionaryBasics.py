def printObj(obj):
    for i in obj:
        print "My {0} is {1}".format(i,obj[i])


# test output...
a = {"name": "Davidjohn Blodgett","age": 35, "country of birth": "USA", "favorite language": "JavaScript"}
printObj(a)
