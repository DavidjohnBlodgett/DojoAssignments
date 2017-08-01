class Product(object):
    def __init__(self,price,item,name,weight,brand,cost,status="for sale"):
        self.price = price
        self.item = item
        self.name = name
        self.weight = weight
        self.brand =brand
        self.cost = cost
        self.status = status

    def sell(self):
        self.status = "sold"
        return self
    def addTax(self,tax):
        temp = self.price * tax
        return self.price + temp
    def Return(self,reason):
        if(reason is "defective"):
            self.price = 0
            self.status = "defective"
        if(reason is "in the box, like new"):
            self.status = "for sale"
        if(reason is "opened"):
            self.status = "used"
            self.price = self.price - (self.price * 0.20)
        return self
    def displayInfo(self):
        print "Price:",self.price
        print "Item:",self.item
        print "Name:",self.name
        print "Weight:",self.weight
        print "Brand:",self.brand
        print "Cost:",self.cost
        print "Status:",self.status
        print "\n"
        return self

prod = Product(100,"foo","bar",10,"sun",100)
print prod.displayInfo().sell().displayInfo().addTax(.1)
