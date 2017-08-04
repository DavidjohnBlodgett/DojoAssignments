class Card(object):
    def __init__(self,name,cast,disc,type,atk,defc):
        self.name = name
        self.cast = cast
        self.disc = disc
        self.type = type
        self.atk = atk
        self.defc = defc
    def debug(self):
        print "#### {0} Debug Output ####".format(self.name)
        print "# Name:",self.name
        print "# Cast:",self.cast
        print "# Description:",self.disc
        print "# Type:",self.type
        print "# Attack:",self.atk
        print "# Defence",self.defc
        print "##########################"
        return self

card = Card("White Knight",3,"From the Castle","Kight",2,2)
card.debug()
