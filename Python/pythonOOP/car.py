class Car(object):
    def __init__(self,price, speed, fuel, mileage):
        self.price = price
        self.speed = speed
        self.fuel = fuel
        self.mileage = mileage
        self.tax = 0.12
        if(price > 10000):
            self.tax = 0.15
        self.display_all()
    def display_all(self):
        print "Price: {0}\nSpeed: {1}\nFuel: {2}\nMileage: {3}\nTax: {4}\n".format(self.price, self.speed, self.fuel, self.mileage, self.tax)

# test output...
car1 = Car(2000, "35mph", "Full", "15mpg")
