class Animal(object):
    def __init__(self,name,health):
        self.name = name
        self.health = health
    def walk(self):
        self.health = self.health - 1
        return self
    def run(self):
        self.health = self.health - 5
        return self
    def displayHealth(self):
        print "Health:", self.health
        return self
class Dog(Animal):
    def __init__(self,name,health=150):
        super(Dog,self).__init__(name,health)
    def pet(self):
        self.health += 1
        return self
class Dragon(Animal):
    def __init__(self,name,health=170):
        super(Dragon,self).__init__(name,health)
    def fly(self):
        self.health -= 10
        return self
    def displayHealth(self):
        print "I am a Dragon"
        super(Dragon,self).displayHealth()
        return self

# test input...
animal = Animal("foo",100)
animal.walk().walk().walk().run().run().displayHealth()
dog = Dog("doggo")
dog.displayHealth().pet().displayHealth()
dragon = Dragon("bhume")
dragon.fly().displayHealth()

# animal2 = Animal("bar", 50)
# animal2.displayHealth()
# dog.fly()
