def listsToDict(list1,list2):
    result = {}
    for i in range(0,len(list1)):
        result[list1[i]] = list2[i]
    return result

# test input...
name = ["Anna", "Eli", "Pariece", "Brendan", "Amy", "Shane", "Oscar"]
favorite_animal = ["horse", "cat", "spider", "giraffe", "ticks", "dolphins", "llamas"]
print listsToDict(name,favorite_animal)
