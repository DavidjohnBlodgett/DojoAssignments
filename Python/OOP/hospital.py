class Patient(object):
    def __init__(self,id,name,allerges):
        self.id = id
        self.name = name
        self.allerges = allerges
        self.bedNumber = None
class Hospital(object):
    def __init__(self,name,cap):
        self.patients = []
        self.name = name
        self.capacity = cap
    def admit(self,pat):
        if(len(self.patients) < self.capacity):
            # add patient to end of list...
            self.patients.append(pat)
            # add bed number to patient based on indx, human readable...
            self.patients[len(self.patients)-1].bedNumber = len(self.patients)
            print "Patient admitted!"
        else:
            print "Patient not admitted!"
        return self
    def discharge(self,name):
        for i in self.patients:
            if(i.name == name):
                del self.patients[self.patients.index(i)]
                i.bedNumber = None
        print "Patient discharged!"
        return self
    # private methods...
    def debug(self):
        print "####==== DEBUG ====####"
        print self.patients
        return self


# test output...
# @parm = (id,name,allerges)
pat1 = Patient(1,"A",["a","b","c"])
pat2 = Patient(2,"B",["a","b","c"])
pat3 = Patient(3,"C",["a","b","c"])
pat4 = Patient(4,"D",["a","b","c"])

hospital = Hospital("SVH",3)

hospital.admit(pat1).admit(pat2).admit(pat3).admit(pat4).debug()
print pat3.bedNumber
hospital.discharge("C").debug()
print pat3.bedNumber
