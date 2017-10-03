using System;
using System.Collections.Generic;

namespace DeckOfCards {
    class Player {
        public string name;
        public List<Card> hand = new List<Card>();

        public Player(string name = "John Doe"){
            this.name = name;
        }

        public Card draw(Deck deck){
            Card card = deck.deal();
            hand.Add(card);
            return card;
        }

        public Card discard(int indx) {
            if (indx > hand.Count) {
                Card card = hand[indx];
                hand.RemoveAt(indx);
                return card;
            } else {
                return null;
            }
            
        }

    }
}