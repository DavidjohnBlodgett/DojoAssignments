def findChar(list,char):
    new_list = []
    print list,char
    for i in list:
        if(i.count(char)):
            new_list.append(i)
    return new_list

#test input ...
wordList = ['hello','world','my','name','is','Anna']
findMe = 'o'

print findChar(wordList,findMe)
