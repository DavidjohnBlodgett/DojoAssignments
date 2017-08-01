def draw_stars(list):
    for i in range(0,len(list)):
        result = ""
        if(type(list[i]) is int):
            for x in range(0,list[i]):
                result += "*"
        if(type(list[i]) is str):
            for x in range(0,len(list[i])):
                result += list[i][0].lower()
        print result
# test output
x = [4, 6, 1, 3, 5, 7, 25]
draw_stars(x)

x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
draw_stars(x)
