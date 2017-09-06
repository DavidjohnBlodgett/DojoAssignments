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
    this.punch = function (obj) {
        if(obj instanceof Ninja) {
            obj.health -= 5;
            console.log(`${obj.name} was punched by ${this.name} and lost 5 Health!`);
            return this;
        }else{
            console.log('target is not a ninja!');
        }
    }
    this.kick = function (obj) {
        if(obj instanceof Ninja) {
            var dmg = 15 * strength;
            obj.health -= dmg;
            console.log(`${obj.name} was kicked by ${this.name} and lost 5 Health!`);
            return this;
        }else{
            console.log('target is not a ninja!');
        }
    }
}


// var ninja = new Ninja('Ryu');
// console.log(ninja);
// ninja.sayName();
// console.log('\n');
// ninja.showStats();
// ninja.drinkSake().drinkSake();
// ninja.showStats();

var blue_ninja = new Ninja("Goemon");
var red_ninja = new Ninja("Bill Gates");
var dummy = {};
// red_ninja.punch(blue_ninja);
red_ninja.kick(blue_ninja);
console.log(blue_ninja);
// -> "Goemon was punched by Bill Gates and lost 5 Health!"

red_ninja.kick(dummy);
