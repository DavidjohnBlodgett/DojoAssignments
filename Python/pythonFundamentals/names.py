def printObj(obj):
    for person in obj:
        temp = []
        for name in person:
            temp.append(person[name])
        print " ".join(temp)



#test output...
students = [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
printObj(students)


def printCountObj(obj):
    for user in obj:
        print user
        count = 1
        for person in users[user]:
            temp = [str(count)+" -",]
            total = 0
            for name in person:
                total += len(person[name])
                temp.append(person[name])
            count = count + 1
            temp.append(" -")
            temp.append(str(total))
            result = " ".join(temp)
            print result

#test output...
users = {
 'Students': [
     {'first_name':  'Michael', 'last_name' : 'Jordan'},
     {'first_name' : 'John', 'last_name' : 'Rosales'},
     {'first_name' : 'Mark', 'last_name' : 'Guillen'},
     {'first_name' : 'KB', 'last_name' : 'Tonel'}
  ],
 'Instructors': [
     {'first_name' : 'Michael', 'last_name' : 'Choi'},
     {'first_name' : 'Martin', 'last_name' : 'Puryear'}
  ]
 }

printCountObj(users)
