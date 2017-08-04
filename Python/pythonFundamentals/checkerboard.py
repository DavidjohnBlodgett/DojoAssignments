# 8*8 board...

def makeCheckerboard(num):
    print num
    result = ""
    for i in range(1,num+1):
        if(i%2):
            for x in range(1,num+1):
                if(x%2):
                    result += "*"
                else:
                    result += " "
        else:
            for x in range(1,num+1):
                if(x%2):
                    result += " "
                else:
                    result += "*"

        result += "\n"

    return result


# test output...
boardSize = 8
print makeCheckerboard(boardSize)
