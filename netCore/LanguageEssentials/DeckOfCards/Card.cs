using System;

namespace DeckOfCards {
    class Card {
        public string stringVal;
        public string suit;
        public int val;

        public Card(string stringVal, string suit, int val) {
            this.stringVal = stringVal;
            this.suit = suit;
            this.val = val;
        }

    }
}