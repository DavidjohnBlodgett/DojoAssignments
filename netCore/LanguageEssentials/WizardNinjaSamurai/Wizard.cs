using System;

namespace WizardNinjaSamurai {
    class Wizard : Human {
        Random rand = new Random();

        public Wizard(string name) : base(name) {
            health = 50;
            intelligence = 25;
        }

        public void heal() {
            health = health + (10 * intelligence);
        }

        public void fireball(Human target) {
            target.health = target.health - rand.Next(20,51);
        }

    }
}