import random

def scoreAndGrades():
    random_num = random.randint(60,100)
    grade = ""
    # Score: 60 - 69; Grade - D
    if(random_num <= 69):
        grade = "D"
    # Score: 70 - 79; Grade - C
    if(random_num >= 70 and random_num <= 79):
        grade = "C"
    # Score: 80 - 89; Grade - B
    if(random_num >= 80 and random_num <= 89):
        grade = "B"
    # Score: 90 - 100; Grade - A
    if(random_num >= 90):
        grade = "A"
    return "Score: {0}; Your grade is {1}".format(random_num,grade)

#test output...
print scoreAndGrades()
