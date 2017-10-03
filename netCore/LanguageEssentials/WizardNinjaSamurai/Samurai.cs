using System;

namespace WizardNinjaSamurai {
    class Samurai : Human {

        static int counter = 0;

        public Samurai(string name) : base(name) {
            health = 200;
            counter++;
        }

        public void death_blow(Human target) {
            if(target.health < 50) {
                target.health = 0;
            }
        }

        public void meditate() {
            health = 200;
        }

        public int how_many() {
            return counter;
        }

    }   
}