'use strict';

class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(`My name is ${this.name}`);
        return this;
    }
    showStats() {
        console.log(`My strength is: ${this.strength}`);
        console.log(`My speed is: ${this.speed}`);
        console.log(`My health is: ${this.health}`);
        return this;
    }
    drinkSake() {
        var amount = 10;
        this.health += amount;
        console.log(`${this.name} takes a drink of sake, and gains ${amount} health!`);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this. wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log('What one programmer can do in one month, two programmers can do in two months.');
        return this;
    }
}

var ninja = new Ninja('Ryu');
ninja.sayName().showStats().drinkSake().drinkSake().showStats();


var super_sensei = new Sensei("Master Splinter");
super_sensei.sayName();
super_sensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
super_sensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
