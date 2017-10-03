using System;

namespace WizardNinjaSamurai {
    class Ninja : Human {
        public Ninja(string name) : base(name) {
            dexterity = 175;

        }
        public void steal(Human target) {
            int damage = 10;
            target.health -=  damage;
            health += damage;
        }

        public void get_away() {
            int damage = 15;
            health -= damage;
        }
    }
}