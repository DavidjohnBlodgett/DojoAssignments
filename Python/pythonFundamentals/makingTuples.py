def makeTuple(obj):
    result = []
    for i in obj:
        temp = (i,obj[i])
        result.append(temp)
    return result

# test input
my_dict = {
  "Speros": "(555) 555-5555",
  "Michael": "(999) 999-9999",
  "Jay": "(777) 777-7777"
}
print makeTuple(my_dict)
