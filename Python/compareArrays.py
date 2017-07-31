def compareArrays(arr1,arr2):
    print arr1,arr2
    if(cmp(arr1,arr2) == 0):
        print "The lists are the same"
    else:
        print "The lists are not the same."


# test output...
list_one = [1,2,5,6,2]
list_two = [1,2,5,6,2]
compareArrays(list_one, list_two)

list_one = [1,2,5,6,5]
list_two = [1,2,5,6,5,3]
compareArrays(list_one, list_two)

list_one = [1,2,5,6,5,16]
list_two = [1,2,5,6,5]
compareArrays(list_one, list_two)

list_one = ['celery','carrots','bread','milk']
list_two = ['celery','carrots','bread','cream']
compareArrays(list_one, list_two)
