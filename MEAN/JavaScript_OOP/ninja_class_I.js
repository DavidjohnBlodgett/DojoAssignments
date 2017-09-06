function Ninja(name) {
    var self = this;
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function () {
        console.log(`My name is, ${this.name}`);
    }
    this.showStats = function () {
        console.log(`My strength is: ${strength}`);
        console.log(`My speed is: ${speed}`);
        console.log(`My health is: ${this.health}`);
    }
    this.drinkSake = function () {
        this.health = this.health + 10;
        return this;
    }

}


var ninja = new Ninja('Ryu');
console.log(ninja);
ninja.sayName();
console.log('\n');
ninja.showStats();
ninja.drinkSake().drinkSake();
ninja.showStats();
